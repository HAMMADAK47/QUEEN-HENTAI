://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '💝 Queen Hentai 💝'
global.premium = 'true'
global.packname = '💝 Queen Hentai 💝 Created By 💝 Dinuwa Official²⁰²³ 💝' 
global.author = '💝 Dinuwa Official²⁰²³ 💝' 
global.igfg = '▢ Follow on Facebook\https://www.facebook.com/profile.php?id=61551915615888\n' 
global.dygp = 'https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S'
global.fgsc = 'https://github.com/dinuwah/QUEEN-HENTAI' 
global.fgyt = 'https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S'
global.fgpyp = 'https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S'
global.fglog = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' 


global.wait = '*💝 _Waiting Bro Uploading by 💝 Queen Hentai 💝..._*'
global.rwait = '🇱🇰'
global.dmoji = '🤣'
global.done = '👍'
global.error = '👎' 
global.xmoji = '🫶' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
