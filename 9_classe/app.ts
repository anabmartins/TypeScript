class Carro {
    marca: string;
    aro: number;
    constructor (marca: string, aro: number) {
        this.marca = marca;
        this.aro = aro;
    }
    verificarAro() {
    return `o aro do carro é: ${this.aro}`
    }
}

let ferrari = new Carro("Ferrari", 20);
console.log(ferrari);
    