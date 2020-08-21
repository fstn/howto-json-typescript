import axios from "axios"
import {User} from "./User";
import {plainToClass} from "class-transformer";

async function main(){
    const response = await axios.get("https://reqres.in/api/users/2")
    const userData = response.data.data
    const user = plainToClass(User, userData)
    console.log("user",user)
    console.log("user",user.generateHello())
}

main()
