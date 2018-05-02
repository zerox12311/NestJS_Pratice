// 'use strict';

// import { Connection, Repository } from 'typeorm';

// import { userextension } from '../Entities//userextension';
// import { userbasic } from '../Entities/userbasic';


// export const EmployeeProviders = [
//     {
//         provide: 'UserBasicRepository',
//         useFactory: (connction: Connection) => connction.getRepository(userbasic),
//         inject: ['DbConnectionToken']
//     },
//     {
//         provide: 'UserExtensionRepository',
//         useFactory: (connction: Connection) => connction.getRepository(userextension),
//         inject: ['DbConnectionToken']
//     }
// ]