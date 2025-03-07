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

    public getNumber() : number{
        return 0
    }
}


class Maneger extends User{

    constructor(name: string, email: string, code: string){
        super(name, email, code)
    }

    public getName(): string {
        return `Maneger: ${this.name}`
    }

    public getNumber() : number{
        return 321
    }


}

class Admin extends User{

    public getName(): string {
        return `Adm: ${this.name}`
    }

    public getNumber() : number{
        return super.getNumber() + 10
    }

}

const maneger1 = new Maneger('Maneger1', 'maneger@email.com'. '2rja5')
console.log(maneger1.getName())