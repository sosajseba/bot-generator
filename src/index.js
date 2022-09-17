const app = require('./app');

async function main(){
    const port = process.env.RS_PORT || 3000;

    await app.listen(port);
    
    console.log('Server on port ' + port);
}

main();