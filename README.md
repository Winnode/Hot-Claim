# Hot Claiming Bot

This project is a bot that automates the claiming process for HOT accounts. It supports Telegram notifications to inform the user about the status of the claims.

## Prerequisites

- Node.js installed on your machine.
- HOT account credentials.
- A Telegram bot token and user ID for notifications.
- Send Near to multi wallet near
- To ensure that your NEAR claiming bot verifies that each account has at least 0.001 NEAR before attempting a claim
## Setup

1. Clone the repository and navigate to the project directory:

    ```bash
    git clone https://github.com/Winnode/Hot-Claim.git
    cd Hot-Claim
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```
    OR
   
    ```bash
    npm install near-api-js moment crypto figlet readline-sync winston node-telegram-bot-api
    ```

4. Create a `accounts.txt` file in the project directory. This file should contain the NEAR account credentials in the following format:

    ```
    PRIVATE_KEY_1|ACCOUNT_ID_1
    PRIVATE_KEY_2|ACCOUNT_ID_2
    ...
    ```

5. Create a `config.json` file in the project directory with the following content:

    ```json
    {
      "telegramNotification": true,
      "telegramBotToken": "YOUR_TELEGRAM_BOT_TOKEN",
      "telegramUserId": "YOUR_TELEGRAM_USER_ID"
    }
    ```

    - Set `telegramNotification` to `false` if you do not want to receive Telegram notifications.
    - Replace `YOUR_TELEGRAM_BOT_TOKEN` with your Telegram bot token.
    - Replace `YOUR_TELEGRAM_USER_ID` with your Telegram user ID.

## Usage

To start the bot, run the following command:

```bash
node run.js
```

## Password For those who are interested in joining our community, you can find the password at https://t.me/winsnip.

```sh
Enter password: ********
```
## Create Telegram bot api and chat id 

Telegram bot api
```
https://t.me/BotFather
```

chat id 
```
https://t.me/GetMyChatID_Bot
```
