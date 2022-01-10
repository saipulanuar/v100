let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Indosat [088279268363]
│ • Gopay [VIA QR]
│ • Saweria [https://saweria.co/raraharsita2]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288279268363
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
