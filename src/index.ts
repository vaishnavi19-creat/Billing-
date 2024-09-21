import { CServer } from './CServer';
import { DataSource } from 'typeorm';
import { Client } from './db/entities/Client';


const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,  // Default MySQL port
    username: 'root',
    password: '',
    database: 'my-d-shop',
    entities: [Client], 
    synchronize: true,  
    logging: false,  
});

const PORT = process.env.PORT || 3001;

// Initialize the database connection before starting the server
dataSource.initialize()
    .then(() => {
        console.log('Database connected successfully');

        
        let server = new CServer().app;

      
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}. http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization', error);
    });
