class Address3{

    constructor(
        public address: string,
        public zipCode: string,
        public number?: number,
    ){}
}

class UserThird{
    name: string
    email: string
    address: Address3[] = []
    active: boolean


    constructor(name:string, email:string, active: boolean = false){
        this.name = name
        this.email = email
        //this.address = [address]
        // this.address.push(address)
        this.active = active
    }

    
    addAddress(newAddress: Address3): void{
        this.address.push(newAddress)
    }

    getAddress(): Address3[]{
        return this.address
    }
}


const address3 = new Address3('Rua X', '58117-000', 110)
const user3 = new UserThird('User 01', 'user1@email.com')

console.log(user3)
user3.addAddress(address3)
console.log(user3)