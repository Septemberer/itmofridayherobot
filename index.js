const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.BOT_TOKEN;

// -1001963154196 мосты

const hbmFirstCourseChatId = -1001963154196;// увб 1? -1001983716773; // check
const hbmSecondCourseChatId = -1002168074726; // check

const hbmFirstCoursePeople = [0, 11]; // list 1 here
const hbmSecondCoursePeople = [0, 11]; // list 2 here

const bot = new TelegramBot(token, { polling: true });

async function sendTelegramMessage(token, chatId, replyMessageId, message) {
    try {
        const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const payload = {
            chat_id: chatId,
            text: message,
            parse_mode: 'MARKDOWN',
            reply_to_message_id: replyMessageId
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        };


        const response = await fetch(apiUrl, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Telegram API error: ${data.description}`);
        }

        console.log('Message sent');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

async function imOnline() {
    const apiBotListen = `https://api.telegram.org/bot${token}/getUpdates`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const response = await fetch(apiBotListen, options);
    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));
}


bot.onText(/\/ping/, (msg) => {
    imOnline();
})


bot.onText(/\/choose/, (msg) => {
    try {
        if (msg.chat.id === hbmFirstCourseChatId) {
            const randomId = Math.floor(Math.random() * (hbmFirstCoursePeople.length));
            console.log('randomId: ' + randomId);
            console.log('1st course studentId: ' + hbmFirstCoursePeople[randomId]);
            console.log('---');
            sendTelegramMessage(token, `${hbmFirstCourseChatId}`, 3, `Привет, [герой](tg://user?id=${randomId}) недели! Пришла твоя очередь отвечать на вопросы`);
        }
        if (msg.chat.id === hbmSecondCourseChatId) {
            const randomId = Math.floor(Math.random() * (hbmSecondCoursePeople.length));
            console.log('randomId: ' + randomId);
            console.log('2nd course studentId: ' + hbmSecondCoursePeople[randomId]);
            console.log('---');
            sendTelegramMessage(token, `${hbmSecondCourseChatId}`, 3, `Привет, [герой](tg://user?id=${randomId}) недели! Пришла твоя очередь отвечать на вопросы`);
        }
    }
    catch (e) {
        console.log(e);
    }
});

// чекаем ошибки
bot.on('polling_error', (error) => {
    console.log(error);
});