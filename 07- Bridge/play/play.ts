import IConsole from "../console/IConsole";
import IPlay from "./IPlay";


export default class Play implements IPlay{

     constructor(private console: IPlay){}
 
     playing(): void {
         console.log("Inicializando Jogo")
     }
     result(): void {
        console.log("Jogo Iniciado");
     }
 }