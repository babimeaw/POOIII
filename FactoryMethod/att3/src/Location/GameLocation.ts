import Location from "./location";
import Game from "./item/Game";
import IItem from "./item/interface/IItem";

export default class GameLocation extends Location{
    protected createitem(): IItem {
        return new Game();
    }
}