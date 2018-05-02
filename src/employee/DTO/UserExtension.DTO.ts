import { ApiModelProperty } from '@nestjs/swagger';

export class UserExtensionDTO {
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    fk_id: number;
    @ApiModelProperty()
    Admit_Type: string;
    @ApiModelProperty()
    Unit: string;
    @ApiModelProperty()
    Title: string;
    @ApiModelProperty()
    Date_Start: string;
    @ApiModelProperty()
    Date_Leave: string;
    @ApiModelProperty()
    Lead_Class: string;
    @ApiModelProperty()
    Office_Tel: string;
    @ApiModelProperty()
    Office_Ext: string;
    @ApiModelProperty()
    Update_Date: Date;
    @ApiModelProperty()
    Update_User: string;
    @ApiModelProperty()
    K_Delete: number;
}



