import { Sequelize } from 'sequelize-typescript';
import { Profile } from '../profile/profile.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'psucoin',
      });
      sequelize.addModels([Profile]);
      await sequelize.sync();
      return sequelize;
    },
  },
];