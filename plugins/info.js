let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
β βγ ππππ ππ π½ππΌπ γ β
β β₯ *Prefix         :* ' ${usedPrefix} '
β β₯ *Menu         :* ${usedPrefix}Menu
β β₯ *Ping           :* ${neww - old} *Ms*
β β₯ *Total User :* ${totalreg} *User*
β β₯ *Runtime    :* ${uptime}
β
β βγ *DONASI* γ β
β β₯ Indosat [0882-7926-8363]
β β₯ Gopay [VIA QR]
β β₯ Saweria [https://saweria.co/raraharsita2]
β
β β *Request?* https://bit.ly/ChannelKingOfBear
β β *Officiall Group* *${conn.getName(conn.user.jid)}* :
β   ${(global.linkGC).map((v, i) => ' *Group ' + (i + 1) + '*\nβ' + v).join`\nβ\n`}
β
β${readMore}
β βγ *PIRACY YUKI_BOT* γ β
β β₯ KAMI TIDAK BERTANGGUNG
β   JAWAB ATAS PENYALAH
β   GUNAAN BOT
β β₯ KAMI TIDAK BERTANGGUNG
β   JAWAB ATAS KEBOCORAN DATA
β   PRIBADI ANDA
β β₯ KAMI AKAN MENYIMPAN DATA
β   SEPERTI NOMER TELEPON
β   ANDA DI DATABASE KAMI
β 
β 
β β *Β©2022 KING OF BEAR* β
β β Scrip original by Norutomo
β β Creator : Benniismael
β β Api xsteam : St4r
β β Api Bsbt : Benniismael
β β Resta
β β Ariq
β β King Of Bear
β βγ *YUKI_BOT* γ β
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
