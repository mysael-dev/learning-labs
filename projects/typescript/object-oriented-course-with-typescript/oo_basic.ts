class UserFirst{
    name: string
    email: string
    active: boolean

    constructor(name:string, email?:string, active: boolean = false){
        this.name = name;
        email? this.email = email : this.email = ""
        this.active = active
    }

}


const carlos = new UserFirst("Carlos", "carlos@email.com")
const eduardo = new UserFirst("Eduardo")

console.log(carlos, eduardo)