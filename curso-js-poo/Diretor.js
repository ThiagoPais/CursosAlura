import Membro from "./Membro.js";

class Diretor extends Membro{
    constructor(nome, email, matricula, cargo = "Diretor", status = "ativo"){
        super(nome, email, matricula, cargo, status)
    }

    passaTarefa(){
        console.log("Delegando tarefas para membros...")
    }
}