import IIFood from "./interface/IIFood";

export default class Hamburguer implements IIFood{
    startRoute(): void {
        this.getCargo();
        console.log("Hamburguer: Enviando à entrega...")
    }
    getCargo(): void {
        console.log("Hamburhuer: Preparando pedido!");
    }
}