import IConsole from "./IConsole";

export default class XBox implements IConsole{
   
    constructor(){
        this.configureGame();
        console.log("XBox: Iniciando");
    }

    configureGame(): void {
        this.authToken();
        console.log("XBox: Configurando")
    }
    authToken(): void {
        console.log("XBox: Autorizando a Aplicação");
    }
}
