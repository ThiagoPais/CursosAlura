export default class Membro {
    constructor(nome, email, matricula, cargo, status = "ativo"){
        this.nome = nome
        this.email = email
        this.matricula = matricula
        this.cargo = cargo || "Consultor"
        this.status = status
    }

    exibirInfos(){
        console.log(`Nome: ${this.nome}; Cargo: ${this.cargo}.`)
    }

    fazerTarefa(){
        console.log("Fazendo tarefa...")
    }
}

let membro = new Membro("Jepeto", "jepeto@mecajun.com", 210234867)

membro.exibirInfos()