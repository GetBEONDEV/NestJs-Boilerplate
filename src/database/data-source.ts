import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: 'postgres://root:123456@localhost:5432/my_db',
  host: process.env.POSTGRES_HOST,
  port: 3306,
  username: '',
  password: '',
  database: '',
  logging: false,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
};
const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
