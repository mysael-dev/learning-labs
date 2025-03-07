class AddressGS{
    private address: string = '' //Opção convencional de declaração de atributos, ideal para usar os getters e setters comuns para quem tem mais afinidades com linguagens como Java, C#, etc.
    private _zipCode: string = '' //Opção mais moderna para usar no Typescript, para facilitar nos getters e setters
    private _number?: number //Opção mais moderna para usar no Typescript, para facilitar nos getters e setters


    public setAddress(address: string): void{

        if(address.length < 7){
            throw new Error('Invalid address')
        }
        this.address = address
    }

    public getAddress(): string{
        return this.address
    }

    public set zipCode(zipCode: string){
        this._zipCode = zipCode
    }
    public get zipCode(): string{
       return this._zipCode.replace(/\D/g, '')
    } 

    public set number(number: number){
        this._number = number
    }

    public get number(): number{
        return this._number? this._number : 0
    }
}


const addressGS = new AddressGS()
addressGS.setAddress('Rua Antônio')
console.log(addressGS.getAddress())
addressGS.zipCode = '58117-000'
console.log(addressGS.zipCode)
console.log(addressGS.number)
addressGS.number = 124
console.log(addressGS.number)
