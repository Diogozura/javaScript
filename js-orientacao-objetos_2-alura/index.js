import { Cliente } from "./Conta/Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Carlos", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Pedro", 5000, 12345678901)
gerente.cadastrarSenha("123")
const cliente = new Cliente ("Laís",12233444400, "431" )


const clientEstaLogado = SistemaAutenticacao.login(cliente, "431")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456")

console.log(clientEstaLogado)
console.log(diretorEstaLogado)
console.log(gerenteEstaLogado)







/* Shift + alt + a 
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from './Conta/ContaPoupanca.js'
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 55522233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca (50, cliente1, 1001);
//const conta = new  Conta(0, cliente1, 1001);
const contaSalario = new ContaSalario (cliente1)

contaSalario.depositar(100)
contaSalario.sacar(10)

console.log(contaSalario) */ 

