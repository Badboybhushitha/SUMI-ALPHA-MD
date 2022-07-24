//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivelogo = 'https://user-images.githubusercontent.com/108208262/179673634-0f3a4d98-4ba5-4656-84af-eacb8d69e938.jpg' //Costomize Alivelogo(type your message in'')
global.alivemsg = `My Name is SUMI ALPHA 🧘‍♂️
My Owner Name is BHUSHITHA👨‍💻` //Costomize Alive Message (type your message in `` )

global.owner = ['94742427578'] //Owner number in aive msg
global.premium = ['94742427578'] //Owner Number info
global.ownernomer = '94742427578' //Owner Number <<<
global.ownernumber = ["94767761566"],//Owner Number 
global.react = ["👨‍💻"] //React in Owner Message  


global.ownername = '😎BHUSHITHA' //Owner Name
global.botname = 'SUMI ALPHA' //Bot Name

global.button = '🌍WEBSITE 🌍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://github.com/botimam/Red-Dragon.git' //Change Yout Button's URL

global.button = '☰ WHTSAPPIS GRUP ☰' //Costomize B Button Name In Alive Message
global.btnurl = 'https://chat.whatsapp.com/LLbFBtwJj4rFlKm7bAbPME' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = 'SUMIALPHA' //Bot Pacage Name
global.author = '😎SUMI ALPHA❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '👻' // Menu emoji
global.footer = '©_Bhushitha.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://github.com/prabhasha2006' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    Ownermessage : '👨‍💻'
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
