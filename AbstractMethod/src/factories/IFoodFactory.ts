import HotDog from "../deliverys/food/HotDog";
import IIFood from "../deliverys/food/interface/IIFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import SoftDrink from "../deliverys/drink/SoftDrink";
import IAiqFome from "../deliverys/drink/interface/IAiqFome";

export default class IFoodFactory implements IDeliveryFactory{
    createDeliveryFood(): IIFood {
        console.log("Transporte Via UBER");
        return new HotDog();
    }
    createDeliveryDrink(): IAiqFome {
        console.log("Transporte Via UBER");
        return new SoftDrink;
    }
}