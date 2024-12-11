const pessoa = {
    nome: "Mavi",
    email: "mavi@mecajun.com",
    nascimento: "2004-05-24",
    cargo: "Diretora de Inovação",
    status: "Ativo",
    exibirInfo: function(){
        console.log("Nome: " + this.nome + "; Cargo: " + this.cargo)
    }
};

pessoa.exibirInfo();

// const outra_pessoa = {
//     nome: "Tuzin",
//     email: "tuzin@mecajun.com",
//     nascimento: "2003-07-15",
//     cargo: "Presidente Organizacional",
//     status: "Ativo"
// };

// Object.setPrototypeOf(outra_pessoa, pessoa)
// outra_pessoa.exibirInfo()