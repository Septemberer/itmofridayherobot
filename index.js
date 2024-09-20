const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.BOT_TOKEN;

// -1001963154196 мосты

const hbmFirstCourseChatId = -1002168074726; // увб 1?
const hbmSecondCourseChatId = -1001963154196; // мосты
//-1002168074726 увб 2? check -1001983716773; 

const hbmFirstCoursePeople = [
    1026043675,
    739414278,
    1459788441,
    479398821,
    612628602,
    977155525,
    834816446,
    1304250058,
    5151720024,
    1031199874,
    638497868,
    1471478936,
    354445733,
    389821914,
    5236696663,
    304661516,
    118500661,
    522895177,
    261519980,
    510522212,
    392406487,
    1242819224,
    510473765,
    1937873840,
    668912243,
    874485704,
    1927288248,
    304519691,
    460284711,
    1017760345,
    410049485,
    276403864,
    965246985,
    1623177179,
    487556985,
    853165817,
    1520060979,
    1793231236,
    1367918009,
    394080356,
    482120274,
    1968323100,
    740848729,
    344749152,
    593895855,
    290930695,
    986279409,
    366770728,
    678965189,
    364601598,
    816664752,
    401093397,
    627595257,
    929822287,
    853125330,
    790080081,
    333091385,
    780362001,
    429599732,
    893608661,
    503880288,
    433719125,
    240768538,
    470590797,
    579710982,
    416302354,
    5040003528,
    981059904,
    1055652344,
    1195544019,
    453585169,
    6469152933,
    1137358834,
    490003628,
    482701990,
    614135809,
    571965930,
    443200762,
    429908419,
    226857840,
    353328547,
    196218142,
    665345681,
    438778624,
    426631599,
    726684536,
    5286036635,
    439549131,
    327709212,
    916672762,
    672301166,
    186752427,
    477701855,
    1862660636,
    613135753,
    279317859,
    1179395934,
    932713942,
    63499111,
    388291634,
    1203950564,
    904232274,
    961183163,
    699446219,
    493249338,
    7442825148,
    2045360889,
    909949406,
    501260406,
    928187359,
    2030917259,
    423198,
    1167306244,
    405501656,
    703152745,
    7530158156,
    683671633,
    454723142,
    1422843976,
    783895280,
    1473480853,
    208428018,
    459571583,
    7095040543,
    563085232,
    451325947,
    435197972,
    1396761918,
    381799117,
    288305113,
    458656188,
    97049614,
    1366475987,
    463920774,
    1387452458,
    1008158820,
    1010429135,
    7228395127,
    662208104,
    1069625863,
    918041195,
    1170449109,
    895035554,
    477808765,
    508767581,
    1154071644,
    480588170,
    1107316029,
    6789610502,
    188779651,
    378152287,
    263862189,
    429033612,
    346268133,
    1371719913,
    7106957988,
    6983131527,
    848215493,
    870100692,
    7403176888,
    5129149801,
    834816446,
    414246886,
    1368254321,
    285100348,
    524706960,
    417060654,
    475887106,
    899225839,
    1018843715,
    343659541,
    557175803,
    484013949,
    274852044,
    6840297737,
    901323292,
    995685941,
    436953256,
    487872176,
    485874788,
    436146696,
    1708624376,
    899081391,
    648898219,
    317865331,
    1136584509,
    690960576,
    1037752659,
    589485263,
    717953665,
    617562805,
    319725693,
    326610435,
    805321445,
    1014463488,
    622365900,
    428944039,
    464049262,
    398030088,
    1159892689,
    449003872,
    706574549,
    968654237,
    1027424032,
    284832579,
    595460234,
    296850242,
    1365513279,
    1316257045,
    72624251,
    950745836,
    494306467,
    1611702064,
    443751741,
    255458578,
    646882002,
    378385463,
    1042344112,
    805734944,
    454758854,
    698605846,
    468559826,
    448404979,
    1205992927,
    715054536,
    506300816,
    663721052,
    383807094,
    661233794,
    286064143,
    1192656583,
    475859081,
    1758363653,
    765177638,
    677959339,
    1050680786,
    214986442,
    720279880,
    635542741,
    245690694,
    748387368,
    583845272,
    685577109,
    605076535,
    709587786,
    482090518,
    843566091,
    766317623,
    427883436,
]; // list 1 here

const hbmSecondCoursePeople = [0, 5129149801, 1]; // list 2 here

const hbmFirstSelectedIds = [1026043675, 433719125];
// Driftknight8
// Alexandra_Dem

const hbmSecondSelectedIds = [];

const fasilitators = [5129149801, 423198];
// me
// tyan

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
        // УВБ 1 КУРС
        if (msg.chat.id === hbmFirstCourseChatId) {
            // Если автор команды в списке фасилитаторов
            if (fasilitators.includes(msg.from.id)) {
                if (hbmFirstSelectedIds.length === hbmFirstCoursePeople.length) {
                    console.log('Все студенты 1 курса были выбраны, сбрасываем список...');
                    hbmFirstSelectedIds.length = 0;
                }

                let randomId;
                do {
                    randomId = Math.floor(Math.random() * hbmFirstCoursePeople.length);
                    selectedPersonId = hbmSecondCoursePeople[randomId];
                } while (hbmFirstSelectedIds.includes(selectedPersonId));

                console.log('randomId: ' + randomId);
                console.log('1st course studentId: ' + hbmFirstCoursePeople[randomId]);

                hbmFirstSelectedIds.push(hbmFirstCoursePeople[randomId]);
                console.log('1st course were selected: ' + hbmFirstSelectedIds);

                sendTelegramMessage(token, `${hbmFirstCourseChatId}`, 1487, `Привет, [герой](tg://user?id=${hbmFirstCoursePeople[randomId]})! Пришла твоя очередь отвечать на вопросы`);
                console.log('successed');
            }
            else {
                sendTelegramMessage(token, `${hbmFirstCourseChatId}`, 1487, `Oops! На данный момент ты не можешь использовать эту команду`);
            }

        }
        // МОСТЫ
        if (msg.chat.id === hbmSecondCourseChatId) {
            if (hbmSecondSelectedIds.length === hbmSecondCoursePeople.length) {
                console.log('Все студенты 2 курса были выбраны, сбрасываем список...');
                hbmSecondSelectedIds.length = 0;
            }

            let randomId;
            do {
                randomId = Math.floor(Math.random() * hbmSecondCoursePeople.length);
                selectedPersonId = hbmSecondCoursePeople[randomId];
            } while (hbmSecondSelectedIds.includes(selectedPersonId));


            console.log('randomId: ' + randomId);
            console.log('2nd course studentId: ' + hbmSecondCoursePeople[randomId]);

            hbmSecondSelectedIds.push(hbmSecondCoursePeople[randomId]);
            console.log('2nd course were selected: ' + hbmSecondSelectedIds);

            sendTelegramMessage(token, `${hbmSecondCourseChatId}`, 3, `Привет, [герой](tg://user?id=${hbmSecondCoursePeople[randomId]}) недели! Пришла твоя очередь отвечать на вопросы`);
            console.log('successed');
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