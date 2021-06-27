let num = [5, 6, 3, 2, 9]
/*num[5] = 7 // para add um valor na variável
num.push(7) // add na ultima posição 
num.length // saber o comprimento da variável
num.sort() // ele ordena os valores 
*/
num.push(7)
num.sort()
console.log(num)
console.log(`nosso vetor é o ${num.length}`)
console.log(`O primeiro valor ${num[0]}`)

let pos = num.indexOf(1)
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor  está na posição ${pos}`)
}
