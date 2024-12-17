import * as dotenv from 'dotenv';
import { createPool } from 'mysql2';

// Cargar las variables de entorno
dotenv.config();

// Usar las variables de entorno para la configuración de la base de datos
const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Exportar el pool para poder usarlo en otros archivos
export { pool };
