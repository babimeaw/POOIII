import IIFood from "../../deliverys/food/interface/IIFood";
import IAiqFome from "../../deliverys/drink/interface/IAiqFome";

export default interface ITransportFactory{
    createDeliveryDrink(): IAiqFome;
    createDeliveryFood(): IIFood;
}