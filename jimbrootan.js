/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Jimbrootan Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

 OA_AI: process.env.JINN_AI === undefined ? true : process.env.BOTNAME,  
 OB_NAME: process.env.BOT_NAME === undefined ? 'HASHIRBOTV4' : process.env.BOT_NAME,
 OA_NAME: process.env.DEP_NAME === undefined ? 'HASHIRBOTV4' : process.env.DEP_NAME,
 OA_REPLY: process.env.DEP_REPLY === undefined ? ' *He is my creator* ' : process.env.DEP_REPLY,
    

};
