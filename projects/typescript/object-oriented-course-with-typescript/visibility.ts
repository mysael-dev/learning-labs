export class UserVisibility {
    private name: string //public | protected | private
    private email: string

    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }


    public changeName(newName:string): void {
        if(newName.length < 3){
            throw new Error('invalid name')
        }
        this.name = newName
    }

    public getName() : string{
        return this.name
    }
}


const user = new UserVisibility('User 1', 'user1@email.com')
user.changeName('Juvenal')
console.log(user.getName())