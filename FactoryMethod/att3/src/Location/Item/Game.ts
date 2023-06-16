import IItem from "./interface/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Game: Iniciando jogo...");
    }
    getDescription(): void {
        console.log("Game: mmo rpg");
    }

}