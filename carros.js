// Classe de abstração
function Veiculo(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

// Classe herdeira - Carro
function Carro(marca, modelo, ano, tipoCombustivel) {
  Veiculo.call(this, marca, modelo, ano);
  this.tipoCombustivel = tipoCombustivel;
}

// Classe herdeira - Moto
function Moto(marca, modelo, ano, cilindrada) {
  Veiculo.call(this, marca, modelo, ano);
  this.cilindrada = cilindrada;
}

// Instâncias
const carro1 = new Carro("Toyota", "Corolla", 2020, "Gasolina");
const moto1 = new Moto("Honda", "CB500", 2018, 500);
const carro2 = new Carro("Ford", "Mustang", 2021, "Gasolina");

console.log(carro1);
console.log(moto1);
console.log(carro2);
