import IAiqFome from "./interface/IAiqFome";

export default class SoftDrink implements IAiqFome{
    startRoute(): void {
        this.getCargo();
        console.log("SoftDrink: Está sendo enviada...")
    }
    getCargo(): void {
        console.log("SoftDrink: A bebida está sendo embalada...");
    }
}