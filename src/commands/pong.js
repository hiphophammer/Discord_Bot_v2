const run = ( client, msg, args ) => {
    msg.reply( `${ client.ws.ping }ms` );
};

export { run };