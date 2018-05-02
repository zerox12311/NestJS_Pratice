import { ApiModelProperty } from '@nestjs/swagger';
import { UserExtensionDTO } from './UserExtension.DTO';

export class UserBasicDTO {
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    Name: string;
    @ApiModelProperty()
    EngName: string;
    @ApiModelProperty()
    ID_No: string;
    @ApiModelProperty()
    PassPort_No: string;
    @ApiModelProperty()
    Sex: string;
    @ApiModelProperty()
    Birthday: string;
    @ApiModelProperty()
    Com_Address: string;
    @ApiModelProperty()
    Com_Zip: string;
    @ApiModelProperty()
    Nom_Address: string;
    @ApiModelProperty()
    Nom_Zip: string;
    @ApiModelProperty()
    Nom_Tel: string;
    @ApiModelProperty()
    Mobile_Tel: string;
    @ApiModelProperty()
    Liaise_Name: string;
    @ApiModelProperty()
    Liaise_Relation: string;
    @ApiModelProperty()
    Liaise_Address: string;
    @ApiModelProperty()
    Liaise_Tel: string;
    @ApiModelProperty()
    E_Mail: string;
    @ApiModelProperty()
    Other_Email: string;
    @ApiModelProperty({ type: Date})
    Update_Date: Date;
    @ApiModelProperty()
    Update_User: string;
    @ApiModelProperty()
    K_Delete: number;
    @ApiModelProperty({ type: UserExtensionDTO, isArray: true })
    userextensions: UserExtensionDTO[]
}


