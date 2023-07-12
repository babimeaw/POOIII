import IConsole from "./IPlay";
import Play from "./play";

export default class AdvancedPlay extends Play{

    constructor(console: IConsole){
        super(console);
    }

    challenge() : void{
        console.log("Desafio Iniciado")
    }
}