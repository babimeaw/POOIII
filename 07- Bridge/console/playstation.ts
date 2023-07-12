import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
   
    constructor(){
        this.configureGame();
        console.log("PlayStation: Iniciando");
    }

    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando")
    }
    authToken(): void {
        console.log("PlayStation: Autorizando a Aplicação");
    }
}
