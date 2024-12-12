import Membro from "./Membro.js";

export default class Diretor extends Membro{
    constructor(nome, email, matricula, cargo = "Diretor", status = "ativo"){
        super(nome, email, matricula, cargo, status)
    }

    passaTarefa(){
        console.log("Fazendo planejamento estratégico...")
    }
}