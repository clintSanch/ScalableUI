import { Userinterface } from "./userinterface";

export class User implements Userinterface{
    
    first_name! : string;
    last_name! : string;
    email_Addr! : string;
    phone_Number!: string;
    password !: string;
    user_Name: string = '';

}