let handler = m => m

let linkRegex = /wa.me\/([0-9A-Za-z]{10,16})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiwame && link && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
 m.reply(`*「 ANTI WA.ME 」*\n\nTerdeteksi *${name}* kamu telah mengirim wa.me ke group!\n\nMaaf Kamu akan dikick dari grup ini bangsat!`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
