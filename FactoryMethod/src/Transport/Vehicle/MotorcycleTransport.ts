import Transport from "../Transport";
import Motorcycle from "./Motorcycle";
import IVehicle from "./interface/IVehicle";

export default class MotorcycleTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Motorcycle;
    }

}