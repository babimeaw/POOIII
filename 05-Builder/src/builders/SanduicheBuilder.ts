import molho from "../componentes/molho";
import pao from "../componentes/pao";
import proteina from "../componentes/proteina";
import salada from "../componentes/salada";
import tipoSanduiche from "../componentes/tipoSanduiche";
import sanduiche from "../produtos/sanduiche";
import IBuilder from "../builders/IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new sanduiche();

    reset(): void {
        this.sanduiche = new sanduiche();
    }
    getsanduiche() : sanduiche {
        const result : sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    addmolho(molho: molho) {
        this.sanduiche.addmolho(molho)
    }
    settipoSanduiche(value: tipoSanduiche) {
        this.sanduiche.tSanduiche = value;
    }
    setpao(pao: pao) {
        this.sanduiche.pao = pao;
    }
    setsalada(salada: salada) {
        this.sanduiche.salada = salada;
    }
    setproteina(proteina: proteina) {
        this.sanduiche.Proteina = proteina;
    }
}