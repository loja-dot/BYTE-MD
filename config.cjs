const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIAO9VsVq1o6mtxAQAAJkIAAAKAAAAY3JlZHMuanNvbq1U2Y6jRhT9lahe2xqD2QpLLQ2bjbf2hm1wlIcyFItZXRS4YeRfmOe85RfzCRHu7kxLmcx0pCAhFQXcOufcc+4XkOVRiWe4AcMvoCBRjSjulrQpMBgCtfJ9TEAPeIgiMAQX3WROrli5fbkOhDDACPGqxK7rRYOXS3N8lH0GMtejH8eP4NYDRXVKIvcHBUNnIJgX4yxX+t48topqHemTOVKVed5cqKVVi8nMU3CSjuAjuHUVUUSiLDCKEKeYoGSGmxWKyMfgb8fZCSab5BAbe8s7iInWTpMnfKCzE3bzyzYlvB23qZIx8GPwV3OFK85UWK6D9uR7AjWCedvHobi6SPJiN5a0wp6Ks+llsHuBX0ZBhr2JhzMa0ebDuiuL53Goak74oO39YPS02j6EFtk9QHbt9KWEcTxJm+rCmh4+CHx5HJ*HPH+x9jSQ5wu9dc*GtKXa4UmUdUtx+HgyUUpokjZ*D3xF3rwS*xfdRUUtWzds1oYQliPVgP0QXpa6zG4ItO3d3he0Z0+AZs7lH4PvBG4Ml7LGNZeN7Sqj4+5gF+GEE*RzppthNZWnBVnxNrKCb*ARrciPUD6vEqXcWQ*9xXEipZW5M4W4GBzsqcPNXcUaSdbcE9vca58PK2Nb06e5x0pzY8yJlb3cKE0mn0pVqKfIU82Ttorj+HRUr493RjFuJh4YsrceIDiISkoQjfLsvgdhDyCv3mKXYHqXF3hR1kbMgo8D3Rzvz7sNN0+pZdjnEXYKEgf70wXzFlPLBv8IeqAguYvLEntmVNKcNAtclijAJRj+eu9UR5rgNKd4GnlgCAYcLzMDmWEZCOHn8tM1RLRERfEpwxT0gE*ydIHBkJIK98D9D41VBZZReAlqsggNUdcFXlQkOGB5qGsG23FMX061ohSXFKUFGLISL*EShLxw6*1PQESdYwcsq7Eyx0NjZIwkqAvCQJVlWZFFTfgJEOn2Ww9k+Jm+OLnTn2N7wI9ISXdZVSQ58t5s*vYSuW5eZXTbZK7WLTABw3fbmNIoC8qOWpUh4oZRjbWOBxj6KCnx3y3HBHtvXF7HmJZ7nROdDVzstYEAOuxdoX+KM*yOPMnLZ4zA8dIACpwoM6wwhJ+7*R7IUFcLzPMz+uXPP37*2t2dOq+4u2M8TFGUlF1*Vzbk54xuzNpt7hrjsWIEihYo4BvPtwS9OjTco4c+NafL8ZMWG9lu2swOl9PBDtxDpk8GjkSSZXnIyLl8*E4RMATVUeVDLvFF3YFUiOvEWWOmmB*MNRaO5dpn93HhRxO7nlZkn3Isl48F+VoahZ4Wczqu+mic74O1c9W9Tbpx9ka8HSld3HrAw3Xk4veHQa4P3SBbB*ugbhcPdThirU19KTi+SE7zpXgt2Ak6zZTjaMVlfaa1TScxAmouVYlbza5Sc44PXGuf2Snqz0InCEnZf8v2fbYkrzM9ek1ddH*0I3wfka+9+GlHX4B3xmNuvXc1Xofuvwwu1Xb2h7qWNo0VnteFOmU1N0ouKZvw5qi4Nk*pUhQsMipEXgK3LgFFgqifkxQMAco8kt8NQ*Kqc*Ik8*MfHKapk4kSvDBPUEmVb+n4XuAGL1+tSF6YqAw7EVasE*qd1RulKLYU0bewAaW7FpwNbn8BUEsBAhQDFAAACAgA71WxWrWjqa3EBAAAmQgAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA7AQAAAAA",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
