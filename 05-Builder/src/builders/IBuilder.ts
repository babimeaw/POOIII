import molho from "../componentes/molho";
import pao from "../componentes/pao";
import proteina from "../componentes/proteina";
import salada from "../componentes/salada";
import tipoSanduiche from "../componentes/tipoSanduiche";
import sanduiche from "../produtos/sanduiche";


export default interface IBuilder{
    reset() : void;
    getsanduiche() : sanduiche;
    addmolho(molho : molho);
    settipoSanduiche(value : tipoSanduiche);
    setsalada(salada : salada);
    setpao(pao : pao);
    setproteina(proteina : proteina); 
}   