import IBuilder from "../builders/IBuilder";
import pao from "../componentes/pao";
import proteina from "../componentes/proteina";
import salada from "../componentes/salada";
import tipoSanduiche from "../componentes/tipoSanduiche";
import molho from "../componentes/molho";

export default class Diretor{
    constructor(private builder : IBuilder){}

    constructorNatural(){
        this.builder.settipoSanduiche(tipoSanduiche.NATURAL);
        this.builder.setpao(pao.Frances);
        this.builder.setsalada(salada.tomate);
        this.builder.addmolho(new molho("Sem molho"));
        this.builder.setproteina(proteina.carne);
    }

    constructorQuaresma(){
        this.builder.settipoSanduiche(tipoSanduiche.QUARESMA);
        this.builder.setpao(pao.Integral);
        this.builder.setsalada(salada.cenoura);
        this.builder.addmolho(new molho("Maionese"));
        this.builder.setproteina(proteina.peixe);
    }

    constructorVegetariano(){
        this.builder.settipoSanduiche(tipoSanduiche.VEGETARIANO);
        this.builder.setpao(pao.Baguete);
        this.builder.setsalada(salada.tomate);
        this.builder.addmolho(new molho("VEG"));
        this.builder.setproteina(proteina.vegetariano);
    }

    constructorXFrango(){
        this.builder.settipoSanduiche(tipoSanduiche.XFRANGO);
        this.builder.setpao(pao.Parmesao);
        this.builder.setsalada(salada.picles);
        this.builder.addmolho(new molho("Especial Frango"));
        this.builder.setproteina(proteina.frango);
    }

    constructorCarne(){
        this.builder.settipoSanduiche(tipoSanduiche.CARNE);
        this.builder.setpao(pao.Hamburguer);
        this.builder.setsalada(salada.cebola);
        this.builder.addmolho(new molho("Barbecue e Ketchup"));
        this.builder.setproteina(proteina.carne);
    }
}











    