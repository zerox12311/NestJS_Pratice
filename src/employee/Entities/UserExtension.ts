import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, PrimaryGeneratedColumn} from "typeorm";
import {UserBasic} from "./UserBasic";


@Entity("UserExtension")
@Index("FK_id",["fk_id",])
export class UserExtension {

    // @Column("int",{ 
    //     generated:true,
    //     nullable:false,
    //     primary:true,
    //     name:"id"
    //     })
    @PrimaryGeneratedColumn()
    id:number;
        

   
    @ManyToOne(type => UserBasic, fk_id => fk_id.userextensions)
    @JoinColumn({ name:'fk_id'})
    fk_id:UserBasic;
    

    @Column("varchar",{ 
        nullable:true,
        length:5,
        default:"NULL",
        name:"Admit_Type"
        })
    Admit_Type:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        default:"NULL",
        name:"Unit"
        })
    Unit:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        default:"NULL",
        name:"Title"
        })
    Title:string;
        

    @Column("date",{ 
        nullable:true,
        default:"NULL",
        name:"Date_Start"
        })
    Date_Start: string;
        

    @Column("date",{ 
        nullable:true,
        default:"NULL",
        name:"Date_Leave"
        })
    Date_Leave: string;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        default:"NULL",
        name:"Lead_Class"
        })
    Lead_Class:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        default:"NULL",
        name:"Office_Tel"
        })
    Office_Tel:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:10,
        default:"NULL",
        name:"Office_Ext"
        })
    Office_Ext:string;
        

    @Column("datetime",{ 
        nullable:true,
        default:"NULL",
        name:"Update_Date"
        })
    Update_Date:Date;
        

    @Column("varchar",{ 
        nullable:true,
        length:20,
        default:"NULL",
        name:"Update_User"
        })
    Update_User:string;
        

    @Column("tinyint",{ 
        nullable:true,
        default:"NULL",
        name:"K_Delete"
        })
    K_Delete:number;
        
}
