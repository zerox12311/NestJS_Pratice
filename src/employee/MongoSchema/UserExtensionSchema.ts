import * as mongoose from 'mongoose';

export const UserExtensionSchema = new mongoose.Schema({
    id: Number,
    fk_id: Number,
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
    K_Delete: Number,
});