import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { UserExtension } from "./UserExtension";


@Entity("UserBasic")
export class UserBasic {

    // @Column("int",{ 
    //     generated:true,
    //     nullable:false,
    //     primary:true,
    //     name:"id"
    //     })
    @PrimaryGeneratedColumn()
    id: number;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Name"
    })
    Name: string;


    @Column("varchar", {
        nullable: true,
        length: 30,
        default: "NULL",
        name: "EngName"
    })
    EngName: string;


    @Column("varchar", {
        nullable: true,
        length: 10,
        default: "NULL",
        name: "ID_No"
    })
    ID_No: string;


    @Column("varchar", {
        nullable: true,
        length: 30,
        default: "NULL",
        name: "PassPort_No"
    })
    PassPort_No: string;


    @Column("char", {
        nullable: true,
        length: 1,
        default: "NULL",
        name: "Sex"
    })
    Sex: string;


    @Column("date", {
        nullable: true,
        default: "NULL",
        name: "Birthday"
    })
    Birthday: string;


    @Column("varchar", {
        nullable: true,
        length: 100,
        default: "NULL",
        name: "Com_Address"
    })
    Com_Address: string;


    @Column("varchar", {
        nullable: true,
        length: 10,
        default: "NULL",
        name: "Com_Zip"
    })
    Com_Zip: string;


    @Column("varchar", {
        nullable: true,
        length: 100,
        default: "NULL",
        name: "Nom_Address"
    })
    Nom_Address: string;


    @Column("varchar", {
        nullable: true,
        length: 10,
        default: "NULL",
        name: "Nom_Zip"
    })
    Nom_Zip: string;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Nom_Tel"
    })
    Nom_Tel: string;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Mobile_Tel"
    })
    Mobile_Tel: string;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Liaise_Name"
    })
    Liaise_Name: string;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Liaise_Relation"
    })
    Liaise_Relation: string;


    @Column("varchar", {
        nullable: true,
        length: 100,
        default: "NULL",
        name: "Liaise_Address"
    })
    Liaise_Address: string;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Liaise_Tel"
    })
    Liaise_Tel: string;


    @Column("varchar", {
        nullable: true,
        length: 50,
        default: "NULL",
        name: "E_Mail"
    })
    E_Mail: string;


    @Column("varchar", {
        nullable: true,
        length: 50,
        default: "NULL",
        name: "Other_Email"
    })
    Other_Email: string;


    @Column("datetime", {
        nullable: true,
        default: "NULL",
        name: "Update_Date"
    })
    Update_Date: Date;


    @Column("varchar", {
        nullable: true,
        length: 20,
        default: "NULL",
        name: "Update_User"
    })
    Update_User: string;


    @Column("tinyint", {
        nullable: true,
        default: "NULL",
        name: "K_Delete"
    })
    K_Delete: number;



    @OneToMany(type => UserExtension, userextensions => userextensions.fk_id,
        {
            cascade: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        })
    userextensions: UserExtension[];

}
