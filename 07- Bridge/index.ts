import { playstation } from "./console/playstation";
import { xbox } from "./console/xbox";
import IConsole from "./play/IPlay";
import AdvancedPlay from "./play/advancedPlay";

function startadvancedPlay (console : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(console);
    play.playing();
    play.result();
    play.challenge();
    
}

startadvancedPlay(new xbox());
startadvancedPlay(new playstation());