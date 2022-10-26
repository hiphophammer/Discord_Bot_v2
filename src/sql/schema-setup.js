import { Client } from 'pg'

const SetupNewClient = (  ) => {
    return (
        new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        })
    );
}

export { SetupNewClient };