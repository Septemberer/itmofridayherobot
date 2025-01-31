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

const hbmFirstSelectedIds = [
    1026043675, // 13.09 - @Driftknight8 
    433719125, // 20.09 - @sunsarahh / @Alexandra_Dem - скрыт / this one
    1055652344, // 27.09 - @sanchos_a
    // 04.10 - @nsnegovaya - скрыт
    1205992927, //11.10 - @vrusq
    // 18.10 - @kein424 - скрыт
    929822287, // 25.10 - @sdrnkdr
    // 01.11 - @kamilailv - скрыт
    // 08.11 - @tashareva - скрыт
    344749152, // 15.11 - @imserega
    717953665, // 22.11 - @sabs1006
    // 29.11 - @murkelm / @weirdstrang - не ответила / скрыт
    // 06.12 - @margo_kudrinsky - скрыт
    916672762, // 13.12 - @Shatten_Tod
    571965930, // 20.12 - @hiphopalonealex
    443200762, // 27.12 - @Valdemar501
    405501656, // 17.01 - @Arammm007
    1611702064, // 24.01 - @oblogina_a
    510473765, // 31.01 - @gordrom
];

const hbmSecondSelectedIds = [];

const fasilitators = [
    5129149801, // @yourtemity
    423198, // @o22yFY
    468559826, // @dulceMargot
    460284711, // @Tatita_av
    410049485, // @uliikkkkk
    1471478936, // @malyshheva_a
    1192656583, // @Kornoskatya
    1242819224, // @LaptevAnatoly
];
// me
// tyan

const questionsBaseList = ['Какое у тебя самое любимое детское воспоминание?',
    'Кто оказал на тебя самое большое влияние в жизни?',
    'Какая книга или фильм перевернули твое мировоззрение?',
    'Какой твой любимый вид отдыха?',
    'Какая твоя самая большая мечта?',
    'Есть ли у тебя таланты, о которых мало кто знает?',
    'Какой самый необычный подарок ты когда-либо получал?',
    'Какая твоя любимая традиция?',
    'Что мотивирует тебя просыпаться по утрам?',
    'Если бы ты мог жить где угодно, где бы это было?',
    'Почему ты выбрал свою магистерскую программу?',
    'Какие навыки, полученные на программе, ты используешь в жизни чаще всего?',
    'Расскажи о самом сложном проекте, над которым ты работал.',
    'Какая твоя самая большая профессиональная цель?',
    'Если бы ты мог освоить одну новую профессию, что бы это было?',
    'Какой самый ценный совет ты получил от своего преподавателя?',
    'Чем ты гордишься в своей работе?',
    'Если бы ты мог вернуться в прошлое, что бы ты сделал по-другому в своей карьере?',
    'Как ты видишь свою карьеру через 10 лет?',
    'Какую роль твоя магистратура играет в твоих профессиональных планах?',
    'Какие хобби помогают тебе расслабиться?',
    'Какой вид спорта или активности тебе ближе всего?',
    'Если бы у тебя был весь день на творчество, что бы ты делал?',
    'Ты предпочитаешь активный отдых или спокойное времяпрепровождение?',
    'Какой твой любимый способ провести выходные?',
    'Есть ли у тебя коллекции или что-то, что ты собираешь?',
    'Какое новое увлечение ты хотел бы попробовать?',
    'Какая песня или музыка всегда поднимает тебе настроение?',
    'Ты больше любишь читать или смотреть фильмы?',
    'Какое из твоих увлечений занимает больше всего времени?',
    'Что бы ты сделал, если бы выиграл миллион долларов?',
    'Если бы ты мог побывать в любой точке времени, куда бы отправился?',
    'Если бы у тебя был суперспособность, какая бы это была?',
    'Какая твоя любимая цитата?',
    'Как ты справляешься с трудностями?',
    'Какой совет ты дал бы самому себе в прошлом?',
    'Есть ли у тебя утренние ритуалы?',
    'Какая привычка, по твоему мнению, сделала тебя лучше?',
    'Как ты принимаешь важные решения?',
    'Если бы у тебя было свободное лето, как бы ты его провел?',
    'Кто вдохновляет тебя больше всего?',
    'Как ты поддерживаешь связь с друзьями?',
    'Что для тебя значит дружба?',
    'Какой совет ты часто даешь другим?',
    'Как ты строишь отношения с коллегами и партнерами?',
    'Расскажи о человеке, который оказал на тебя большое влияние.',
    'Какой самый ценный урок ты узнал от своей семьи?',
    'Как ты празднуешь достижения других?',
    'Какую поддержку ты ценишь больше всего?',
    'Что, по твоему мнению, самое важное в общении с людьми?',
    'Какой твой любимый фильм или сериал?',
    'Есть ли у тебя любимый жанр музыки?',
    'Если бы ты мог встретиться с любым историческим деятелем, кто бы это был?',
    'Какое произведение искусства произвело на тебя сильное впечатление?',
    'У тебя есть любимая книга, к которой ты возвращаешься снова и снова?',
    'Какой твой любимый музей или выставка?',
    'Есть ли у тебя любимое место для прогулок?',
    'Какой твой любимый ресторан или кафе?',
    'Какая кухня мира нравится тебе больше всего?',
    'Если бы ты мог написать книгу, о чем бы она была?',
    'Как ты обычно начинаешь свой день?',
    'Есть ли у тебя ритуалы, которые помогают тебе сохранять продуктивность?',
    'Что помогает тебе расслабиться после долгого дня?',
    'Какой навык ты хотел бы освоить в этом году?',
    'Как ты относишься к планированию?',
    'Какую привычку ты недавно начал развивать?',
    'Что помогает тебе справляться с трудностями?',
    'Как ты поддерживаешь баланс между работой и отдыхом?',
    'Какой у тебя самый любимый способ отдыхать?',
    'Какие 3 вещи ты всегда носишь с собой?',
    'Какое открытие в своей жизни ты считаешь самым важным?',
    'Есть ли у тебя любимый момент триумфа, которым ты гордишься?',
    'Какая твоя самая большая победа на учебе или работе?',
    'Если бы ты мог изменить одно решение в своей жизни, что бы это было?',
    'Какое событие в твоей жизни ты считаешь поворотным?',
    'Какой твой самый неожиданный успех?',
    'Что из твоих достижений удивило тебя самого?',
    'Какой самый интересный проект ты реализовал?',
    'Какую цель ты поставил себе в этом году?',
    'Что мотивирует тебя продолжать двигаться вперед?',
    'Какой ты видишь свою жизнь через 5 лет?',
    'Если бы у тебя было 3 желания, что бы ты загадал?',
    'Как ты представляешь себе идеальный день?',
    'Какие навыки ты хотел бы освоить в будущем?',
    'Какую страну ты мечтаешь посетить?',
    'Есть ли у тебя список желаний на жизнь?',
    'Какая цель кажется тебе самой амбициозной?',
    'Если бы у тебя было неограниченное время, чем бы ты занялся?',
    'Какую мечту ты планируешь осуществить в ближайшие годы?',
    'Что для тебя значит успех?',
    'Что ты больше всего ценишь в своей профессии?',
    'Какая задача оказалась для тебя самым большим вызовом?',
    'Как ты преодолеваешь профессиональные трудности?',
    'Кто твой главный наставник или учитель?',
    'Какой твой самый ценный опыт на работе?',
    'Какие изменения ты бы хотел видеть в своей отрасли?',
    'Какой проект в рамках магистратуры стал твоим любимым?',
    'Что для тебя самое важное в команде?',
    'Какую роль ты предпочитаешь занимать в групповых проектах?',
    'Как ты оцениваешь свои профессиональные достижения?',
    'Как ты заводишь новые знакомства?',
    'Какие качества ты больше всего ценишь в людях?',
    'Есть ли у тебя герой, которым ты восхищаешься?',
    'Какой был самый запоминающийся совет от друга?',
    'Как ты справляешься с конфликтами?',
    'Какой твой лучший способ вдохновлять других?',
    'Что делает общение с тобой уникальным?',
    'Какую поддержку ты получаешь от окружающих?',
    'Как ты выражаешь благодарность другим?',
    'Что, по твоему мнению, делает команду сильной?',
    'Как ты понимаешь, что достиг успеха?',
    'Какие привычки помогают тебе расти как личности?',
    'Как ты справляешься с самокритикой?',
    'Есть ли у тебя практика рефлексии?',
    'Какую свою черту ты бы хотел развить?',
    'Какой совет ты дал бы самому себе в 16 лет?',
    'Как ты отмечаешь свои достижения?',
    'Что тебя вдохновляет развиваться?',
    'Какой самый ценный урок ты усвоил за последний год?',
    'Как ты понимаешь счастье?',
    'Какое место ты бы хотел посетить больше всего?',
    'Какое из путешествий было для тебя самым запоминающимся?',
    'Ты предпочитаешь путешествовать в одиночку или с компанией?',
    'Какое место, где ты уже был, стало твоим любимым?',
    'Если бы у тебя была неделя отпуска, куда бы ты отправился?',
    'Какие традиции или культуры тебя больше всего вдохновляют?',
    'Какой город или страна лучше всего отражают твой характер?',
    'Какой самый необычный опыт ты получил в путешествиях?',
    'Что для тебя важнее в поездке: комфорт или приключения?',
    'Если бы ты мог переехать в другую страну, где бы это было?',
    'Как ты описал бы себя тремя словами?',
    'Какие три качества ты ценишь в себе больше всего?',
    'Что ты считаешь своим главным достижением в жизни?',
    'Как ты находишь баланс между эмоциями и рациональностью?',
    'Что тебе помогает справляться с неудачами?',
    'Как ты воспринимаешь критику?',
    'Каким ты хочешь, чтобы тебя запомнили?',
    'Какой твой самый необычный талант?',
    'Если бы ты мог изменить одну вещь в своей жизни, что бы это было?',
    'Что для тебя значит быть счастливым?',
    'Как ты относишься к современным технологиям?',
    'Какая технологическая новинка произвела на тебя впечатление?',
    'Если бы ты мог создать приложение, что бы оно делало?',
    'Какую роль технологии играют в твоей жизни?',
    'Что, по твоему мнению, станет следующим технологическим прорывом?',
    'Как ты относишься к искусственному интеллекту?',
    'Какая социальная проблема, на твой взгляд, требует технологического решения?',
    'Какие гаджеты ты используешь каждый день?',
    'Какую технологию ты бы хотел освоить?',
    'Как ты защищаешь свои данные в цифровом мире?',
    'Как ты заботишься о своем физическом и психическом здоровье?',
    'У тебя есть любимый вид спорта или физической активности?',
    'Как ты поддерживаешь энергию в течение дня?',
    'Какой твой любимый полезный перекус?',
    'Что помогает тебе сохранять внутренний баланс?',
    'Есть ли у тебя ритуалы, связанные со здоровьем?',
    'Как ты справляешься со стрессом?',
    'Какие советы для здоровья ты можешь дать другим?',
    'Ты больше любишь йогу или бег?',
    'Как ты отдыхаешь после напряженного дня?',
    'У тебя есть любимый вид творчества?',
    'Какой самый креативный проект ты когда-либо делал?',
    'Как ты вдохновляешься для новых идей?',
    'Если бы ты мог научиться рисовать или играть на инструменте, что бы ты выбрал?',
    'Какую песню ты бы написал, если бы стал музыкантом?',
    'Как ты обычно выражаешь свои эмоции через творчество?',
    'Кто твой любимый художник или музыкант?',
    'Какое творчество тебе больше всего нравится в других?',
    'Какую роль играет искусство в твоей жизни?',
    'Если бы ты мог создать собственный фильм, о чем бы он был?',
    'Если бы ты был персонажем мультфильма, кем бы ты стал?',
    'Какое самое нелепое событие случалось с тобой?',
    'Если бы ты мог съесть только одно блюдо до конца жизни, что бы это было?',
    'Какой у тебя самый странный или необычный страх?',
    'Какая шутка всегда заставляет тебя смеяться?',
    'Если бы ты оказался на необитаемом острове, какую одну вещь ты бы взял с собой?',
    'Какую суперспособность ты точно не хотел бы иметь?',
    'Если бы ты мог стать животным, то каким?',
    'Какую самую глупую покупку ты сделал?',
    'Если бы ты мог сменить имя, каким бы оно было?',
    'Какую часть своей работы ты любишь больше всего?',
    'Как ты решаешь сложные задачи на работе?',
    'Какие качества делают тебя отличным командным игроком?',
    'Что для тебя значит быть лидером?',
    'Как ты находишь мотивацию в рутинной работе?',
    'Какой проект стал для тебя самым интересным в твоей карьере?',
    'Какую профессию ты бы выбрал, если не свою?',
    'Что делает твою команду особенной?',
    'Какой совет ты бы дал тем, кто только начинает работать?',
    'Какой момент в твоей карьере был для тебя самым гордым?',
    'Кто или что вдохновляет тебя каждый день?',
    'Какое место или событие больше всего на тебя повлияло?',
    'Если бы ты мог дать один совет каждому человеку в мире, что бы это было?',
    'Какую свою мечту ты планируешь осуществить в ближайшем будущем?',
    'Кто из известных людей служит для тебя примером?',
    'Что ты делаешь, когда чувствуешь упадок сил?',
    'Какую книгу или фильм ты бы порекомендовал другим для вдохновения?',
    'Что тебя вдохновляет продолжать двигаться к своей цели?',
    'Как ты отмечаешь свои победы?',
    'Что для тебя значит вдохновение?',
    'Как выглядит твой обычный день?',
    'Какую привычку ты считаешь самой полезной?',
    'Что тебя больше всего радует в будние дни?',
    'Как ты организуешь свое время?',
    'Какой у тебя любимый способ провести вечер после работы?',
    'Как ты предпочитаешь проводить выходные?',
    'Какая мелочь делает тебя счастливым каждый день?',
    'Что ты делаешь первым делом, когда приходишь домой?',
    'Какой твой любимый способ начать утро?',
    'Какую часть дня ты любишь больше всего?',
    'Как ты выбрал свою магистерскую программу?',
    'Какие курсы или дисциплины оказались для тебя самыми интересными?',
    'Чем магистратура изменила твою жизнь?',
    'Что тебе больше всего нравится в процессе обучения?',
    'Как ты организуешь себя при подготовке к экзаменам?',
    'Какие навыки ты развил благодаря обучению?',
    'Какое задание или проект стало для тебя самым сложным?',
    'Как ты находишь баланс между учебой и личной жизнью?',
    'Кто из преподавателей или одногруппников вдохновил тебя больше всего?',
    'Какой совет ты бы дал тем, кто только поступил в магистратуру?',
    'Какое хобби ты считаешь своим главным?',
    'Какое занятие тебя расслабляет?',
    'Какие новые увлечения ты хотел бы попробовать?',
    'Есть ли у тебя увлечение, которым ты занимаешься с детства?',
    'Какой самый необычный хобби у тебя был?',
    'Какие навыки ты приобрел благодаря своему увлечению?',
    'Есть ли у тебя любимый автор, музыкант или художник, который вдохновляет тебя?',
    'Как твои увлечения помогают тебе в жизни?',
    'Что заставило тебя начать заниматься своим хобби?',
    'Есть ли хобби, которым ты занимаешься ради заработка?',
    'Как ты находишь общий язык с новыми людьми?',
    'Какие черты характера ты больше всего ценишь в друзьях?',
    'Кто твой лучший друг, и как вы познакомились?',
    'Как ты проводишь время с близкими?',
    'Как ты справляешься с конфликтами в команде?',
    'Что для тебя значит дружба?',
    'Как ты поддерживаешь отношения на расстоянии?',
    'Какое самое ценное качество в людях?',
    'Какой совет тебе чаще всего дают близкие?',
    'Как ты справляешься с негативной критикой?',
    'Что заставляет тебя двигаться вперед?',
    'Как ты мотивируешь себя в трудные моменты?',
    'Какие цели ты поставил на этот год?',
    'Как ты оцениваешь свои успехи?',
    'Что помогает тебе не сдаваться?',
    'Как ты планируешь свой карьерный рост?',
    'Как ты отмечаешь достижения?',
    'Что ты делаешь, чтобы оставаться мотивированным?',
    'Какая цель кажется тебе самой важной в жизни?',
    'Как ты вдохновляешь других?',
    'Какой твой любимый гаджет?',
    'Какую роль социальные сети играют в твоей жизни?',
    'Как ты борешься с отвлечениями от технологий?',
    'Есть ли у тебя любимый канал или блог?',
    'Какую программу или приложение ты используешь чаще всего?',
    'Как ты относишься к работе удаленно?',
    'Если бы ты мог создать свой сайт, о чем бы он был?',
    'Какие современные технологии тебя вдохновляют?',
    'Какую роль технологии играют в твоей учебе?',
    'Какой твой любимый технологический тренд?',
    'Какой мир ты представляешь через 10 лет?',
    'Если бы ты мог что-то изменить в будущем, что бы это было?',
    'Как ты представляешь свой идеальный дом будущего?',
    'Какие навыки, по твоему мнению, будут важны в ближайшие годы?',
    'Какую глобальную проблему ты хотел бы решить?',
    'Как ты планируешь свое развитие в будущем?',
    'Если бы у тебя была возможность узнать свое будущее, ты бы сделал это?',
    'Какие технологии, по твоему мнению, изменят мир?',
    'Что самое важное ты хочешь оставить после себя?',
    'Какую мечту ты планируешь осуществить первой?',
    'Какое достижение ты считаешь своим самым важным?',
    'Какой урок жизни был для тебя самым ценным?',
    'Что ты считаешь своей самой большой победой?',
    'Какое событие в жизни изменило тебя больше всего?',
    'Что заставляет тебя гордиться собой?',
    'Как ты справляешься с неудачами?',
    'Какой самый необычный опыт ты получил?',
    'Какое качество помогло тебе достичь успеха?',
    'Какое решение оказалось самым верным в твоей жизни?',
    'Какой совет ты бы дал себе 10 лет назад?',
    'Кто или что вдохновляет тебя больше всего?',
    'Какой момент в жизни ты считаешь по-настоящему вдохновляющим?',
    'Как ты вдохновляешься для творчества или работы?',
    'Есть ли у тебя человек, на которого ты равняешься?',
    'Какое событие стало для тебя источником вдохновения?',
    'Какую музыку или фильмы ты включаешь, чтобы вдохновиться?',
    'Что помогает тебе найти силы в трудные моменты?',
    'Как ты вдохновляешь других?',
    'Какие слова или цитаты мотивируют тебя больше всего?',
    'Какой совет ты получил, который до сих пор тебя вдохновляет?',
    'Какое путешествие стало для тебя самым запоминающимся?',
    'Как ты готовишься к поездкам?',
    'Есть ли место, куда ты мечтаешь вернуться?',
    'Какой необычный опыт ты получил в другой стране?',
    'Что больше всего тебя впечатляет в разных культурах?',
    'Какое путешествие изменило твое мировоззрение?',
    'Какая традиция или культура оказалась для тебя самой интересной?',
    'Какой сувенир из путешествия ты ценишь больше всего?',
    'Что ты любишь больше: природу или большие города?',
    'Какую страну ты хотел бы исследовать вдоль и поперек?',
    'Какие мелочи делают тебя счастливым каждый день?',
    'Какой у тебя самый любимый завтрак?',
    'Как ты выбираешь, чем заняться в свободное время?',
    'Есть ли у тебя утренние или вечерние ритуалы?',
    'Какой самый неожиданный момент произошел с тобой в обычный день?',
    'Как ты отдыхаешь после напряженной недели?',
    'Какую книгу или фильм ты пересматриваешь в плохом настроении?',
    'Какую часть дня ты любишь больше всего?',
    'Как ты обычно отмечаешь свои маленькие успехи?',
    'Есть ли у тебя любимый маршрут для прогулок?',
    'Как ты поддерживаешь связь с друзьями и семьей?',
    'Какие качества ты ценишь в людях больше всего?',
    'Какой самый ценный урок ты узнал о дружбе?',
    'Как ты находишь общий язык с новыми людьми?',
    'Какой совет о взаимоотношениях ты получил и запомнил?',
    'Что для тебя самое важное в дружбе?',
    'Как ты справляешься с конфликтами?',
    'Кто в твоей жизни оказал на тебя наибольшее влияние?',
    'Как ты вдохновляешь своих близких?',
    'Как ты решаешь сложные вопросы в общении с другими?',
    'Какой творческий проект ты хотел бы реализовать?',
    'Как ты находишь вдохновение для своих идей?',
    'Какое произведение искусства произвело на тебя самое сильное впечатление?',
    'Какую роль творчество играет в твоей жизни?',
    'Есть ли у тебя хобби, которое связано с искусством?',
    'Какое креативное занятие тебе больше всего нравится?',
    'Как ты справляешься с творческими кризисами?',
    'Если бы ты мог заняться любым видом творчества, что бы это было?',
    'Как ты делишься своими идеями с другими?',
    'Какую творческую цель ты хочешь достичь?',
    'Какую мечту ты хотел бы осуществить в ближайшие годы?',
    'Какая твоя самая большая цель на данный момент?',
    'Как ты планируешь свои действия для достижения мечты?',
    'Что для тебя важнее: процесс или результат?',
    'Какую свою мечту ты считаешь самой смелой?',
    'Что тебя вдохновляет двигаться вперед к своим целям?',
    'Какую маленькую цель ты достиг недавно?',
    'Какую большую цель ты хотел бы достичь за 10 лет?',
    'Как ты отмечаешь свои достижения?',
    'Как ты справляешься с трудностями на пути к своим мечтам?',
    'Какую технологию ты бы хотел освоить?',
    'Какую программу или приложение ты считаешь самым полезным?',
    'Как технологии помогают тебе в жизни?',
    'Какую роль играет интернет в твоем образовании или работе?',
    'Какие гаджеты облегчают тебе повседневные задачи?',
    'Как ты относишься к виртуальной реальности?',
    'Какие социальные сети ты используешь чаще всего?',
    'Как ты находишь баланс между технологиями и реальной жизнью?',
    'Какие технологии ты считаешь наиболее перспективными?',
    'Какую технологическую новинку ты хотел бы попробовать?',
    'Какая часть твоей работы приносит тебе наибольшее удовлетворение?',
    'Как ты выбираешь проекты или задачи для работы?',
    'Какой был самый сложный вызов в твоей карьере?',
    'Как ты справляешься с перегрузкой на работе?',
    'Как ты мотивируешь себя на выполнение рутинных задач?',
    'Какие навыки помогли тебе достичь успеха на работе?',
    'Какую карьерную цель ты хочешь достичь в ближайшее время?',
    'Какие изменения ты хотел бы внести в свою профессиональную жизнь?',
    'Какой совет ты можешь дать тем, кто начинает работать в твоей сфере?',
    'Какой момент в твоей карьере был для тебя самым гордым?',
    'Какой твой самый важный проект в жизни?',
    'Как ты понимаешь успех?',
    'Что помогает тебе ощущать свою ценность?',
    'Какие цели помогают тебе чувствовать себя реализованным?',
    'Какую роль в твоей жизни играет самообразование?',
    'Что для тебя важнее: стабильность или развитие?',
    'Какой личный проект ты хотел бы реализовать?',
    'Что ты считаешь своим главным вкладом в общество?',
    'Как ты находишь баланс между достижениями и отдыхом?',
    'Как ты оцениваешь свои успехи?',
    'Кто оказал на тебя наибольшее влияние в жизни?',
    'Какую семейную традицию ты любишь больше всего?',
    'Какую роль играет семья в твоей жизни?',
    'Как ты поддерживаешь близкие отношения с родными?',
    'Какую семейную историю ты рассказываешь чаще всего?',
    'Какой совет от членов семьи запомнился тебе больше всего?',
    'Как ты справляешься с трудностями в семейной жизни?',
    'Какие ценности ты хотел бы передать своим детям или близким?',
    'Какой момент с семьей стал для тебя самым счастливым?',
    'Как ты проводишь время с близкими людьми?',
    'Как ты проводишь свое свободное время?',
    'Какой твой любимый способ расслабиться?',
    'Какие активности помогают тебе восстанавливаться после напряженной недели?',
    'Какое занятие приносит тебе больше всего удовольствия?',
    'Какой твой самый запоминающийся выходной?',
    'Как ты выбираешь, чем заняться на выходных?',
    'Какие мероприятия ты посещаешь чаще всего?',
    'Какое новое хобби ты хотел бы попробовать?',
    'Какую книгу или фильм ты предпочитаешь для отдыха?',
    'Как ты вдохновляешься для новых идей в досуге?',
    'Какая твоя главная философия в жизни?',
    'Как ты понимаешь счастье?',
    'Какие принципы ты считаешь наиболее важными?',
    'Какую роль в твоей жизни играет вера или убеждения?',
    'Как ты находишь смысл в повседневной жизни?',
    'Какая цитата или высказывание наиболее точно отражают твое мировоззрение?',
    'Как ты справляешься с неопределенностью в жизни?',
    'Какое событие повлияло на твои взгляды больше всего?',
    'Как ты находишь гармонию с собой?',
    'Как ты определяешь свои приоритеты?',
    'Какие навыки ты считаешь своими сильными сторонами?',
    'Какой новый навык ты хотел бы освоить в ближайшее время?',
    'Как ты оцениваешь свои профессиональные способности?',
    'Какие привычки помогают тебе развиваться?',
    'Какую роль играет практика в освоении новых навыков?',
    'Как ты планируешь свое развитие в карьере?',
    'Какие знания ты считаешь наиболее важными?',
    'Как ты справляешься с обучением сложным вещам?',
    'Как ты учишься на своих ошибках?',
    'Как ты передаешь свои знания другим?',
    'Как ты находишь новых друзей?',
    'Как ты поддерживаешь дружеские отношения?',
    'Какую роль играет дружба в твоей жизни?',
    'Какие качества ты ценишь в друзьях?',
    'Какой самый запоминающийся момент у тебя с друзьями?',
    'Как ты справляешься с конфликтами в дружбе?',
    'Какие традиции у тебя есть с друзьями?',
    'Как ты вдохновляешь своих друзей?',
    'Как ты проводишь время с близкими друзьями?',
    'Какое самое ценное качество в дружбе?',
    'Как ты понимаешь роль лидера?',
    'Какой лидер или наставник оказал на тебя влияние?',
    'Какие качества делают тебя успешным лидером?',
    'Как ты мотивируешь других?',
    'Как ты справляешься с трудными ситуациями в команде?',
    'Какие решения в управлении были для тебя самыми важными?',
    'Как ты оцениваешь успех своей команды?',
    'Как ты развиваешь лидерские навыки?',
    'Какую роль играет доверие в управлении?',
    'Какой самый ценный урок ты получил в роли лидера?',
    'Какой твой любимый анекдот?',
    'Что всегда заставляет тебя смеяться?',
    'Какую самую смешную ситуацию ты пережил?',
    'Если бы ты мог сыграть в комедийном фильме, кого бы ты сыграл?',
    'Какой смешной случай произошел с тобой на работе?',
    'Какие моменты из повседневной жизни кажутся тебе особенно веселыми?',
    'Как ты относишься к шуткам над собой?',
    'Какой твой самый любимый мем?',
    'Как ты поднимаешь настроение друзьям?',
    'Какую шутку ты часто рассказываешь?',
    'Какое путешествие ты запомнил на всю жизнь?',
    'Какие страны или города ты мечтаешь посетить?',
    'Что тебя больше всего вдохновляет в новых местах?',
    'Как ты предпочитаешь путешествовать: самостоятельно или с группой?',
    'Какой самый необычный транспорт ты использовал в поездке?',
    'Что для тебя важно при выборе маршрута?',
    'Какое блюдо из путешествия стало твоим любимым?',
    'Какая самая неожиданная встреча произошла с тобой в поездке?',
    'Какой природный ландшафт тебе нравится больше всего?',
    'Какие культурные традиции из других стран впечатлили тебя больше всего?',
    'Какой твой самый любимый фильм, который ты пересматриваешь?',
    'Какие песни или исполнители всегда поднимают тебе настроение?',
    'Какой жанр книг ты читаешь чаще всего?',
    'Какой вид искусства тебе ближе всего?',
    'Какой предмет в твоем доме имеет для тебя особое значение?',
    'Какую еду ты готов есть каждый день?',
    'Какие приложения в телефоне ты используешь чаще всего?',
    'Какие модные или бытовые вещи делают твою жизнь проще?',
    'Какое изобретение прошлого века ты считаешь самым важным?',
    'Какой твой любимый праздник и почему?',
    'Как ты принимаешь важные решения в жизни?',
    'Какие факторы ты учитываешь, выбирая между несколькими вариантами?',
    'Какую самую сложную дилемму ты решал?',
    'Есть ли у тебя "правило", которому ты следуешь при принятии решений?',
    'Как ты справляешься с сожалениями о сделанном выборе?',
    'Какой совет ты бы дал людям, которые не могут определиться?',
    'Какой выбор в жизни был для тебя самым неожиданным, но правильным?',
    'Как ты проверяешь правильность своего решения?',
    'Как ты находишь баланс между логикой и интуицией?',
    'Как ты справляешься с последствиями трудных решений?',
    'Какие качества ты развивал в себе последние годы?',
    'Какие профессиональные навыки ты считаешь своими сильными сторонами?',
    'Как ты изучаешь новые темы или профессии?',
    'Какие советы ты даешь тем, кто хочет улучшить свои навыки?',
    'Какой новый навык или знание тебе хотелось бы освоить?',
    'Какую роль в твоем профессиональном росте играет наставничество?',
    'Какие книги или курсы больше всего помогли в развитии?',
    'Как ты организуешь свой процесс обучения?',
    'Как ты справляешься с неудачами при освоении чего-то нового?',
    'Как ты планируешь свою долгосрочную профессиональную стратегию?',
    'Какая твоя самая заветная мечта?',
    'Какие шаги ты предпринимаешь для реализации своих желаний?',
    'Если бы ты мог сделать одну вещь без ограничений, что бы это было?',
    'Какую мечту ты уже осуществил?',
    'Какая твоя детская мечта до сих пор остается актуальной?',
    'Что ты считаешь самым важным в достижении своих желаний?',
    'Какую мечту ты считаешь самой смелой?',
    'Что для тебя важнее: процесс достижения или результат?',
    'Какую поддержку ты хотел бы получить для реализации своей мечты?',
    'Какую цель ты хочешь достичь до конца этого года?',
    'Какую самую нелепую ситуацию ты пережил?',
    'Если бы ты мог поменяться местами с комиком, кто бы это был?',
    'Как ты находишь смешное даже в сложных ситуациях?',
    'Какой твой любимый способ поднять настроение окружающим?',
    'Какие моменты из детства до сих пор вызывают у тебя улыбку?',
    'Какую забавную традицию ты поддерживаешь в своей жизни?',
    'Какой твой любимый мем или шутка?',
    'Какой смешной случай произошел с тобой на работе или учебе?',
    'Как ты реагируешь на добрые розыгрыши?',
    'Если бы ты был героем комедийного фильма, как бы он назывался?',]

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

function getRandomQuestions() {
    let questions = [];
    let selectedQuestion;
    do {
        let questionId = Math.floor(Math.random() * questionsBaseList.length);
        selectedQuestion = questionsBaseList[questionId];
        if (!questions.includes(selectedQuestion)) {
            questions.push(selectedQuestion); // Используем push вместо add в JS
        }
    } while (questions.length < 3);

    return questions;
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
                let selectedPersonId; // введена отдельная переменная для хранения ID
                do {
                    randomId = Math.floor(Math.random() * hbmFirstCoursePeople.length);
                    selectedPersonId = hbmFirstCoursePeople[randomId];
                } while (hbmFirstSelectedIds.includes(selectedPersonId));

                console.log('randomId: ' + randomId);
                console.log('1st course studentId: ' + selectedPersonId);

                hbmFirstSelectedIds.push(selectedPersonId);
                console.log('1st course were selected: ' + hbmFirstSelectedIds);

                let questions = getRandomQuestions();
                console.log('Questions were selected: ' + questions);

                sendTelegramMessage(token, hbmFirstCourseChatId, 1487,
                    `Привет, [герой](tg://user?id=${selectedPersonId})! Пришла твоя очередь отвечать на вопросы
    
Расскажи немного о себе, чтобы Сообществу УВБ было проще задавать тебе актуальные вопросы. При желании, ты можешь подсветить темы, которые актуальны для тебя в данный момент
    
А вот и первые вопросы на сегодня:
1. ${questions[0]}
2. ${questions[1]}
3. ${questions[2]}`); // было некорректное использование шаблонных строк

                console.log('success');
            } else {
                sendTelegramMessage(token, hbmFirstCourseChatId, 1487, `Oops! На данный момент ты не можешь использовать эту команду`);
            }
        }

        // МОСТЫ
        if (msg.chat.id === hbmSecondCourseChatId) {
            // Если автор команды в списке фасилитаторов
            if (fasilitators.includes(msg.from.id)) {
                if (hbmSecondSelectedIds.length === hbmSecondCoursePeople.length) {
                    console.log('Все студенты 2 курса были выбраны, сбрасываем список...');
                    hbmSecondSelectedIds.length = 0;
                }

                let randomId;
                let selectedPersonId; // введена отдельная переменная для хранения ID
                do {
                    randomId = Math.floor(Math.random() * hbmSecondCoursePeople.length);
                    selectedPersonId = hbmSecondCoursePeople[randomId];
                } while (hbmSecondSelectedIds.includes(selectedPersonId));

                console.log('randomId: ' + randomId);
                console.log('2nd course studentId: ' + selectedPersonId);

                hbmSecondSelectedIds.push(selectedPersonId);
                console.log('2nd course were selected: ' + hbmSecondSelectedIds);

                sendTelegramMessage(token, hbmSecondCourseChatId, 3,
                    `Привет, [герой](tg://user?id=${selectedPersonId}) недели! Пришла твоя очередь отвечать на вопросы`);
                console.log('success');
            } else {
                sendTelegramMessage(token, hbmSecondCourseChatId, 3, `Oops! На данный момент ты не можешь использовать эту команду`);
            }
        }
    } catch (e) {
        console.error('Ошибка:', e);
    }

});

// чекаем ошибки
bot.on('polling_error', (error) => {
    console.log(error);
});