import {ContaCorrente} from "./ContaCorrente.js"
import {Cliente} from "./Cliente.js"

const cliente1 = new Cliente();
const cliente2 = new ContaCorrente();
const cliente3 = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.agencia = 1001;
cliente3.deposita(100);


console.log(cliente3);