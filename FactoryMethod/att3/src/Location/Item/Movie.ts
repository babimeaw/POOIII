import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Movie: Filme comecando...");
    }
    getDescription(): void {
       console.log("Movie: Filme de terror");
    }

}