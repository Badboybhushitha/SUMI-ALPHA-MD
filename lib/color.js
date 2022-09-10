const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const harukaLog = (text, color) => {
	return !color ? chalk.greenBright('[ NOTI MY QUEEN ] ') + chalk.magentaBright(text) : chalk.greenBright('[ NOTI MY QUEEN ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
    harukaLog
}
