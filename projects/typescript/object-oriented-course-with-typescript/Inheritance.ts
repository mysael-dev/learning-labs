export class User{
    protected name: string //public | protected | private
    protected email: string

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


class Maneger extends User{

    public getName(): string {
        return `Maneger: ${this.name}`
    }

}

const maneger1 = new Maneger('Maneger1', 'maneger@email.com')
console.log(maneger1.getName())