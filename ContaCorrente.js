export class  ContaCorrente{
    agencia;
    saldo = 0;
    saca(valor){
        if(valor <= this.saldo){
            return this.saldo -= valor;
        }
    }
    deposita(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
}