import {createPool} from 'mysql2/promise';

const conexionApi = createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'api_hoteles'
  // database: 'hotel_travel'
});

export default conexionApi;