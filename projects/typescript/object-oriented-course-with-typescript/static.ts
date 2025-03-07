class AddressStatic{
    private address: string = '' 
    private _zipCode: string = ''
    private static defaultValidation = 75000000
 


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

    public static isCepValid(zipCode: string): boolean{
        return parseInt(zipCode.replace(/\D/g, '')) >  AddressStatic.defaultValidation
    }

}

// const address = new AddressStatic()
console.log(AddressStatic.isCepValid('58117-000'))