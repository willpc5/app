const { select } = require('@inquirer/prompts');

const start = async () => {

    while (true) {
        
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "Listar"
                },
                {
                    name: "Sair",
                    value: "Sair"
                }
            ]
        })

        switch (opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar");
                break;
            case "listar":
                console.log("Vamos listar");
                break;
            case "Sair":
                console.log("Até a próxima");
                return
        }
    }
}

start();