import Client from "./clients/Client";
import IFoodFactory from "./factories/IFoodFactory";
import IDeliveryFactory from "./factories/interface/IDeliveryFactory";
import Company from "./deliverys/const/Company";
import IAiqFomeDelivery from "./factories/IAiqFomeDelivery";

const currentCompany = Company.IFOOD;
let factory! : IDeliveryFactory;
switch(currentCompany){
    case Company.IFOOD:
        factory = new IFoodFactory();
        break;
    case Company.IAIQFOME:
        factory = new IAiqFomeDelivery();
        break;
    default :
        console.log("Companhia não Definida");
}

const client = new Client(factory);
client.startRoute();