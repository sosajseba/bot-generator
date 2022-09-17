const app = require('./app');

async function main(){
    const port = process.env.RS_PORT || 3000;

    await app.listen(port);
    
    console.log('Server on port ' + port);
}

main();

// const qrcode = require('qrcode-terminal');

// const {Client} = require('whatsapp-web.js');

// const client2 = new Client();

// client2.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });

// client2.on('ready', () => {
//     console.log('Cliente 2 logueado!!!');
// });

// client2.on('message', msg => {
//     client2.sendMessage(msg.from, 'Hola! Soy un bot que devuelve el mismo msj que recibió :D\nTu mensaje fue: ' + msg.body);
// });

// client2.initialize();