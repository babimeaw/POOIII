import Beer from "../deliverys/drink/Beer";
import IIFood from "../deliverys/food/interface/IIFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import Hamburguer from "../deliverys/food/Hamburguer";
import IAiqFome from "../deliverys/drink/interface/IAiqFome";

export default class IAiqFomeDelivery implements IDeliveryFactory{
    createDeliveryFood(): IIFood {
        console.log("Transporte Via 99");
        return new Hamburguer();
    }
    createDeliveryDrink(): IAiqFome {
        console.log("Transporte Via 99");
        return new Beer();
    }
}