console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro` 
)

const idadeComprador = 19
const estaCompanhada = false
const passagemComprada = true
console.log("Destinos possíveis")
console.log(listaDeDestinos)

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1)//delete item da lista
// } else {
//     if (estaCompanhada) {
//         console.log("O comprador está acompanhado")
//         listaDeDestinos.splice(1, 1)
//     } else {
//         console.log("você não tem idade para comprar, mete o pé daqui filha da puta")
//     }
// }
if (idadeComprador >= 18 || estaCompanhada ) {
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1)//delete item da lista
} else {
   console.log("você não maior de idade, não posso vender para voce gatinho(a)")
}
console.log("embarque: \n\n")

if(idadeComprador >=18 && passagemComprada ){
    console.log("boa viagem")
}else{
    console.log("você não pode embarcar")
}


// console.log(idadeComprador >18)
// console.log(idadeComprador >=18)
// console.log(idadeComprador ==18)
// console.log(idadeComprador <=18)
// console.log(idadeComprador <18)