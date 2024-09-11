const start  = () => {
    while(true){
        let opcao = "sair"
        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listas":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}  

start()