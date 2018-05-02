import * as mongoose from 'mongoose';
import { UserExtensionSchema } from './UserExtensionSchema';

export const UserBasicSchema = new mongoose.Schema({
    id: Number,
    Name: String,
    EngName: String,
    ID_No: String,
    PassPort_No: String,
    Sex: String,
    Birthday: String,
    Com_Address: String,
    Com_Zip: String,
    Nom_Address: String,
    Nom_Zip: String,
    Nom_Tel: String,
    Mobile_Tel: String,
    Liaise_Name: String,
    Liaise_Relation: String,
    Liaise_Address: String,
    Liaise_Tel: String,
    E_Mail: String,
    Other_Email: String,
    Update_Date: Date,
    Update_User: String,
    K_Delete: Number,
    UserExtensions: [{
        Admit_Type: String,
        Unit: String,
        Title: String,
        Date_Start: String,
        Date_Leave: String,
        Lead_Class: String,
        Office_Tel: String,
        Office_Ext: String,
        Update_Date: Date,
        Update_User: String,
        K_Delete: Number
    }]
});


