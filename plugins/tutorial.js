let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Instagram: *AXCELLZ_*

Ketik di *[TERMUX]*
pkg install git && pkg install ffmpeg && pkg install imagemagick && pkg install nodejs

Untuk Githubnya..
5) $git clone https://github.com/AXCELLZ/ALWIN-TERMUX
6) $ls
7) $cd Arya-BOT3

LAST
8) npm i
9) node index.js
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

