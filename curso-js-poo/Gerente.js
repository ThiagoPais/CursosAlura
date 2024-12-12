import Membro from "./Membro.js";

export default class Gerente extends Membro{
    constructor(nome, email, matricula, cargo = "Gerente", status = "ativo"){
        super(nome, email, matricula, cargo, status)
    }

    passaTarefa(){
        console.log("Delegando tarefas para membros...")
    }
}