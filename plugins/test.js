
const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'public') {
Asena.addCommand({pattern: 'news', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/Fe0yGRL.jpg";
    r_text[1] = "https://i.imgur.com/smgyikh.jpeg";
    r_text[2] = "https://i.imgur.com/7ylxsF3.jpeg";
    
        
     var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━ NEW AUDIO UPDATING SOON ━*
▪️ *കോവിഡിൽ ആശ്വസകണക്ക്; ടിപിആർ 11.15 ശതമാനം: മരണം 67*

▪️ *കാണാതായ രണ്ടരവയസുകാരന്‍ കുളത്തില്‍ വീണ് മരിച്ചു*

▪️ *3പേർ ഇരുന്ന് എല്ലാം തീരുമാനിക്കുന്നു; പട്ടികയിൽ ഗ്രൂപ്പുകള്‍ക്ക് അതൃപ്തി*

▪️ *അഫ്ഗാനില്‍ വീണ്ടും സ്ഫോടനം; 15പേർ കൊല്ലപ്പെട്ടു: നിരവധിപേർക്ക് പരുക്ക്*

▪️ *മസിനഗുഡിയെ വിറപ്പിച്ച കടുവ പിടിയിൽ; ഭീതിക്ക് ആശ്വാസം*

▪️ *കെട്ടിടനികുതി വെട്ടിച്ച ഉദ്യോഗസ്ഥരെ മന്ത്രി സംരക്ഷിക്കുന്നു: ആരോപണവുമായി ബിജെപി*

▪️ *ഇന്ന് ഫൈനൽ; ഐപിഎല്‍ കിരീടം ചെന്നൈയിലേയ്ക്കോ കൊല്‍ക്കത്തയിലേയ്ക്കോ ?*

▪️ *മികച്ച ടെലിവിഷന്‍ റിപ്പോര്‍ട്ടിങ്; പി.ഉണ്ണികൃഷ്ണന്‍ സ്മാരക അവാര്‍ഡ് മിഥുന്‍ സുധാകരന്*

▪️ *22ന് സംസ്ഥാനത്തെ ബാങ്ക് ജീവനക്കാര്‍ പണിമുടക്കും*

▪️ *കേരളത്തിൽ 8867 പേര്‍ക്കുകൂടി കോവിഡ്, 9872 രോഗമുക്തർ; ചികിത്സയിൽ  94,756 പേർ*

▪️ *അങ്കമാലി-എരുമേലി ശബരി റെയില്‍പ്പാത: മഴ മാറിയാലുടൻ ലിഡാര്‍ സര്‍വേ *

▪️ *മസിനഗുഡിയെ വിറപ്പിച്ച നരഭോജി കടുവ പിടിയിൽ; കൊന്നുതിന്നത് നാലു പേരേ*

▪️ *നിധിതട്ടിപ്പ്, പ്രണയം, സൂപ്പര്‍ ഷെഫ്; ശമ്പളം 60,000: യുവതികളെ കെണിയിലാക്കി സണ്ണി*

▪️ *കുറവുകൾ ഒളിപ്പിക്കാൻ മോർഗനേക്കാൾ മിടുക്കൻ ധോണി, ചെന്നൈയ്ക്ക് സാധ്യത: മഞ്ജരേക്കർ*

▪️ *ബുദ്ധി ‘ഉപദേശിച്ചു’ കൊടുത്ത് രാജ്യം ഇരുട്ടിൽ; കേന്ദ്രം അറിഞ്ഞില്ലേ കൽക്കരി തീരാറായെന്ന്?*

▪️ *കാണ്ഡഹാറിലെ ഷിയ പള്ളിയിൽ സ്ഫോടനം; 33 മരണം, 73 പേർക്ക് പരുക്ക്*

▪️ *മോർഗനേക്കാൾ ഭേദം ധോണി; ആപ്പിളിനെ ഓറഞ്ചുമായി താരതമ്യം ചെയ്യുമോ? ഗംഭീർ*

▪️ *പരിശുദ്ധ ബസേലിയോസ് മാര്‍ത്തോമ്മാ മാത്യൂസ് തൃതീയന്‍ സ്ഥാനാഭിഷിക്തനായി*

▪️ *മോൻസന്റെ അറസ്റ്റ് ഐജി ലക്ഷ്മണിനെ അറിയിച്ചത് അനിത; വാട്സാപ് സന്ദേശം പുറത്ത് *

▪️ *ആര്യന് ഭക്ഷണം വാങ്ങാന്‍ 4,500 രൂപ  മണിഓര്‍ഡര്‍ അയച്ച് ഷാറുഖും കുടുംബവും*

▪️ *അയോധ്യയിലെ ദശരഥ പുത്രന്‍ രാമന് കൊല്ലത്ത് പെറ്റി‍; വെട്ടിലായി പൊലീസ്*

    *━━━━━ NEWS UPDATES ━━━*
    
_*🌍 © MIKHAIEL [ ◆-- LUCIFER --◆ ]*_
`}) 

 }));
}
