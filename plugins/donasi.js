let handler = async m => m.reply(`
╭─「 Donasi • Free 」
│ • Follow www.instagram.com/axcellz_
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/+62 823-2738-6917
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
