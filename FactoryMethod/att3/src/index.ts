import GameLocation from "./Location/GameLocation";
import Location from "./Location/location";
import MovieLocation from "./Location/MovieLocation";

declare var process;

let Location :Location;
if(process.agrv.includes("--Jogo")){
   Location = new GameLocation();
   Location.startLocation();
} else if (process.argv.includes("--PrimeVideo")){
   Location = new MovieLocation();
   Location.startLocation();
}else{
    console.log("Selecione o tipo de Locacao.")
}