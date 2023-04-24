# CloneGPT

CloneGPT is a simple chat application that uses OpenAI's GPT-3 API to generate messages in response to user input. The application is built using Node.js, React, and Express, and allows users to create new chats and switch between them, as well as send and receive messages.

## Installation
To run CloneGPT locally, follow these steps:

1. Clone this repository to your local machine using the command git clone https://github.com/oskccy/chatGPT-clone.
2. Install the required dependencies by running the command npm install in the app directory.
3. Create an account on OpenAI at https://openai.com/.
4. Create an API key at https://platform.openai.com/account/api-keys (will be substituted as a string for the variable API_KEY in server.js).
5. Start the server by running the command npm run start-backend OR nodemon server.js.
6. Start the client by running the command npm run start-frontend.
7. Open your web browser and navigate to http://localhost:3000 to see the UI.

## Usage

When you first open CloneGPT, you will see a sidebar with a button to create a new chat, and a list of existing chats. Clicking on a chat title will display the messages for that chat in the main section of the application.

To send a message, type your message into the input box at the bottom of the main section and click the "➢" button or press Enter. CloneGPT will then generate a response to your message using the GPT-3 API and display it in the chat history.

## Contributing
If you would like to contribute to CloneGPT, feel free to submit a pull request!

### License
This project is licensed under the MIT License - see the LICENSE file for details.
