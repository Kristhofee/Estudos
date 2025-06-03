/*
THIS EM INGLÊS SIGNIFICA => ESTE, ESTA, ISTO...
NO JAVASCRIPT, THIS FAZ REFERÊNCIA:

NODE => MODULE.EXPORTS
WEB => WINDOW

ESCOPO:
    => GLOBAL => QUANDO COMEÇAMOS A ESCREVER NOSSA APLICAÇÃO
    NO CONTEXTO GLOBAL, O THIS FAZ REFERÊNCIA AO OBJETO GLOBAL,
    QUE É O OBJETO WINDOW NO NAVEGADOR DE INTERNET OU AO OBJETO GLOBAL NO NODE.JS.

    => LOCAL => POR EXEMPLO, DENTRO DE UMA FUNÇÃO.
*/

const name = "Ferreira" // está no escopo global

function myName() {
    const myName = "Ferreira" // está no escopo local
}

const person = {
    name: "Kristhofee",
    age: 27,
    talk: function () {
        console.log(this.age)
    }
}

person.talk()

function myFunction() {
    this.console.log("Agora sou o global") // em função vazia ele aponta para o global
}

myFunction()