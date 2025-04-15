/*
Developer Info :
YT : https://Youtube.com/@YuukeyMiAyam
TT : https://tiktok.com/@yuukeyoffc
WA : wa.me/6285943212106
Jangan Hapus Wm Yah Sayangku?
*/
const fs = require('fs')

global.botname = "Killer Queen V7"
global.version = "7.0.0"
global.owner = "6285943212106"
global.footer = "Yuukey Sigma"
global.idch = "120363414187748705@newsletter"
global.packname = "Mi Ayam"

//Global Thumb
global.thumb = "https://pornhub"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
