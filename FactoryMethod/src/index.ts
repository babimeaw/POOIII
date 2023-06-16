import CarTransport from "./transport/CarTransport";
import Transport from "./transport/Transport";
import MotorcycleTransport from "./transport/vehicle/MotorcycleTransport";

declare var process;

let transport: Transport;
if(process.agrv.includes("--uber")){
    transport = new CarTransport();
    transport.startTransport();
} else if (process.argv.includes("--eats")){
    transport = new MotorcycleTransport();
    transport.startTransport();
}else{
    console.log("Selecione o tipo de transporte.")
}