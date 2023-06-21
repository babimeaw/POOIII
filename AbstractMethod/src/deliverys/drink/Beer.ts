import IAiqFome from "./interface/IAiqFome";

export default class Beer implements IAiqFome{
    startRoute(): void {
        this.getCargo();
        console.log("Beer: Iniciando entrega...")
    }
    getCargo(): void {
        console.log("Beer: Bebida enviada!");
    }
}