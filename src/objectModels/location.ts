import { User } from './user';

export class Location extends User {
    country_Name! : string;
    county_Name! : string;
    sub_County_Name! : string;
    ward! : string;
    sub_Location! : string;
}