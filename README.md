# HDE Discord

`HDE Discord` is a small library that simplify the generation of an embed to add default data that will be already present in the embed when generating it.
⚠️ Only work with [Discord.JS](https://www.npmjs.com/package/discord.js) library.

# Installation

Use [npm](https://www.npmjs.com/) manager to install `HDE Discord`.
Make sure to have [discord.js](https://www.npmjs.com/package/discord.js) installed too.

```bash
npm install hde-discord
```
or
```bash
npm i hde-discord
```

# Usage

```js
const Discord = require("discord.js")
const HDE = require("hde-discord")
Discord.MessageEmbed = HDE.embed

HDE.setup({
    author: {   // .setAuthor
        title: "",
        url: ""
    },
    title: "",  // .setTitle
    description: "",    // .setDescription
    thumbnail: "",  // .setThumbnail
    color: "",  // .setColor
    timestamp: true,    // or false || .setTimestamp
    image: "",   // .setImage
    footer: {   // .setFooter 
        title: "",
        url: ""
    }
})
```

Remember that define all parameters is optional, you can do :
```
HDE.setup({title: "test"})
```

# Contributing

If there is a problem with the library or you want to contribute the library, send me a DM on Discord to `Tsumiki#0001`.

# License

MIT
