const { Client } = require('whatsapp-web.js');

class BotHandler {

  static async initializeBot(botConfig) {

    const client = new Client();

    client.on('message', msg => {
      if (msg.body === botConfig.keyword)
        client.sendMessage(msg.from, botConfig.reply);
    });

    client.initialize();

    const qr = await new Promise((resolve, reject) => {
      client.once('qr', qr => {
        console.log(qr)
        resolve(qr)
      })
      setTimeout(() => {
        reject(new Error("QR event wasn't emitted in 10 seconds."))
      }, 10000)
    })

    return qr;
  }
}

module.exports = BotHandler;