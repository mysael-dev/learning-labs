class Address{

    constructor(
        public address: string,
        public zipCode: string,
        public number?: number,
    ){}
}

class UserSecond{
    name: string
    email: string
    active: boolean
    address: Address

    constructor(name:string, email:string, address: Address, active: boolean = false){
        this.name = name
        this.email = email
        this.address = address
        this.active = active
    }

    
}



const address1 = new Address('Rua X', '58117-000', 110)
const user1 = new UserSecond('User 01', 'user1@email.com', address1)
console.log(user1.address.zipCode)

console.log(user1)


const address2 = new Address('Rua Y', '58117-000', 130)
const user2 = new UserSecond('User 02', 'user2@email.com', address1)
console.log(user2)