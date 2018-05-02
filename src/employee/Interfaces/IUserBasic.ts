'use strict';

import { IUserExtension } from './IUserExtension';

export interface IUserBasic {
    id: number;
    Name: string;
    EngName: string;
    ID_No: string;
    PassPort_No: string;
    Sex: string;
    Birthday: string;
    Com_Address: string;
    Com_Zip: string;
    Nom_Address: string;
    Nom_Zip: string;
    Nom_Tel: string;
    Mobile_Tel: string;
    Liaise_Name: string;
    Liaise_Relation: string;
    Liaise_Address: string;
    Liaise_Tel: string;
    E_Mail: string;
    Other_Email: string;
    Update_Date: Date;
    Update_User: string;
    K_Delete: number;
    userextensions: IUserExtension[]
}