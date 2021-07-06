console.log(`\n Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 10
const estaCompanhada = false
let passagemComprada = false
const destino = "Rio de Janeiro"

console.log("\n Destinos possíveis")
console.log(listaDeDestinos)


const podeComprar = idadeComprador >= 18 || estaCompanhada == true
let contador = 0
let desistinoExiste = false
while (contador < listaDeDestinos.length) {

    if (listaDeDestinos[contador] == destino) {

        desistinoExiste = true
        break
    }
    contador += 1
}

console.log("Destino existe: ", desistinoExiste)

if (podeComprar && desistinoExiste) {
    console.log("boa viagem meu parceiro ")
} else {
    console.log("iiiiii deu erro!")
}

for(let i = 0; i < 3 ; i ++ ) {

    if (listaDeDestinos[contador] == destino) {
        desistinoExiste = true
     
    }
}