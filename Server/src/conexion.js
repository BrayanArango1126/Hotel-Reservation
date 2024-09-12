import {createPool} from 'mysql2/promise';

const conexion = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'hotel_travel'
});

export default conexion;