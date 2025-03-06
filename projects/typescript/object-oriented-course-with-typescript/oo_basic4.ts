class Address4{

    constructor(
        public address: string,
        public readonly zipCode: string, //com a propriedade readonly, não dá para mudar o valor do atributo depois que atribui um valor inicial
        public number?: number,
    ){}

    chanceZipCode(newZipCode: string){
        // this.zipCode = newZipCode  dá erro, por conta do readonly
    }
}


const address4 = new Address4('Rua X', '58117-000', 110)
console.log(address4.zipCode)
// address4.zipCode = '58117-999' dá erro por conta que já foi atribuido um valor, e esse atributo tem o readonly
console.log(address4.zipCode)