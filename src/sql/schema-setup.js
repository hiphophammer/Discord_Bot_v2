import { Client } from 'pg'

const SetupNewClient = ( ) => {
    return (
        new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        })
    );
}

const HandleSchema = ( client ) => {
    client_sql.query( 'SELECT table_schema,table_name FROM information_schema.tables', ( err, res ) => {
        if (err) throw err;
        
    });
}

export { SetupNewClient, HandleSchema };