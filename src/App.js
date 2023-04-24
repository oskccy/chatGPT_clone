import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue("");
  };

  const getMessage = async () => {
    const config = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions/",
        config
      );
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error + " NOOOOO!");
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        { title: currentTitle, role: "user", content: value },
        { title: currentTitle, role: message.role, content: message.content },
      ]);
    }
  }, [message, currentTitle]);

  console.log(previousChats);

  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );

  console.log(uniqueTitles);
  return (
    <div className="App">
      <section className="sidebar">
        <button className="new-chat" onClick={createNewChat}>
          + New Chat
        </button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => {
            return (
              <li key={index} onClick={() => handleClick(uniqueTitle)}>
                {uniqueTitle}
              </li>
            );
          })}
        </ul>
        <nav>
          <p className="name">Made by Oscar</p>
        </nav>
      </section>
      <section className="main">
        <h1>cloneGPT</h1>
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => {
            return (
              <li key={index}>
                <p className="role">{chatMessage.role}</p>
                <p>{chatMessage.content}</p>
              </li>
            );
          })}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div
              id="submit"
              onClick={getMessage}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  console.log("NODFDOFIFO");
                  getMessage();
                }
              }}
            >
              ➢
            </div>
          </div>
          <p className="info">
            This is a nice and chill chatGPT clone. No copyright involved. Enjoy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
