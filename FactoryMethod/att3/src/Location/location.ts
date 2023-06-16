import IItem from "./item/interface/IItem"

export default abstract class Location{
    startLocation(): void {
        const item = this.createitem();
        item.start();
    }

   protected abstract createitem(): IItem;
}