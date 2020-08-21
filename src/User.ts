import {Transform} from "class-transformer";

export class User {
    id: number;
    email: string;
    @Transform(value=> value.toUpperCase())
    first_name: string;
    last_name: string;
    avatar: string;

    generateHello(){
        return "Hello "+this.first_name+" "+this.last_name
    }
}
