let handler  = async (m, { conn, args }) => {
   m.reply(`YUKI BOT Ini Menggunakan Script Dari Youtube : https://www.youtube.com/channel/UCu3cFVCT9rHD1spardoP93g`)
}
 
handler.help = ['script']
handler.tags = ['about']
handler.command = /^(script)$/i

module.exports = handler
