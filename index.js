const Discord = require('discord.js')
const fs = require('fs')
const user = {
    d: "user",
    f: "config.json"
}

module.exports = {
    setup: ({title, description, color, thumbnail, image, timestamp, author, footer} = {}) => {
        checkConfig()
        let userSettings = JSON.parse(fs.readFileSync(`${__dirname}\\${user.d}\\${user.f}`, "utf8"));
        userSettings = {
            title: title ? title : null,
            description: description ? description : null,
            color: color ? color : null,
            thumbnail: thumbnail ? thumbnail : null,
            image: image ? image : null,
            timestamp: timestamp ? timestamp : null,
            author: {
                title: author ? author.title ? author.title : null : null,
                url: author ? author.url ? author.url : null : null
            },
            footer: {
                title: footer ? footer.title ? footer.title : null : null,
                url: footer ? footer.url ? footer.url : null : null
            }
        }
        fs.writeFile(`${__dirname}\\${user.d}\\${user.f}`, JSON.stringify(userSettings, null, 2), (x) => {})
    },
    embed: () => {
        checkConfig()
        const userSettings = require(`${__dirname}\\${user.d}\\${user.f}`)
        let sendingEmbed = new Discord.MessageEmbed()
        if(userSettings.title) sendingEmbed.setTitle(userSettings.title)
        if(userSettings.description) sendingEmbed.setDescription(userSettings.description)
        if(userSettings.thumbnail) sendingEmbed.setThumbnail(userSettings.thumbnail)
        if(userSettings.timestamp === true) sendingEmbed.setTimestamp()
        if(userSettings.author.title && userSettings.author.url) {
            sendingEmbed.setAuthor(userSettings.author.title, userSettings.author.url)
        } else if(userSettings.author.title) {
            sendingEmbed.setAuthor(userSettings.author.title)
        } else if(userSettings.author.url) {
            sendingEmbed.setAuthor(userSettings.author.url)
        }
        if(userSettings.footer.title && userSettings.footer.url) {
            sendingEmbed.setFooter(userSettings.footer.title, userSettings.footer.url)
        } else if(userSettings.footer.title) {
            sendingEmbed.setFooter(userSettings.footer.title)
        } else if(userSettings.footer.url) {
            sendingEmbed.setFooter(userSettings.footer.url)
        }
        return sendingEmbed
    },
    create: async () => {
        if(!fs.existsSync(`${__dirname}\\${user.d}`)) fs.mkdirSync(`${__dirname}\\${user.d}`)
        if(!fs.existsSync(`${__dirname}\\${user.d}\\${user.f}`)) fs.writeFileSync(`${__dirname}\\${user.d}\\${user.f}`)
        console.log("[HDE] Data file path has been checked")
    }
}

function checkConfig() {
    if(!fs.existsSync(`${__dirname}\\${user.d}`)) throw "[HDE] 'user' folder does not exist, please use <hde-discord>.create()"
    if(!fs.existsSync(`${__dirname}\\${user.d}\\${user.f}`)) throw "[HDE] 'config' file does not exist, please use <hde-discord>.create()"
}