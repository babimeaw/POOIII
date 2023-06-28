import molho from "../componentes/molho";
import pao from "../componentes/pao";
import proteina from "../componentes/proteina";
import salada from "../componentes/salada";
import tipoSanduiche from "../componentes/tipoSanduiche";

export default class sanduiche {
    private _molho : molho [] = [];
    private _pao: pao;
    private _proteina : proteina;
    private _salada : salada;
    private _tSanduiche : tipoSanduiche;

    addmolho(molho: molho){
        this._molho.push(molho);
    }
   public get molho() : molho[]{
        return this._molho;
    }
    public get tSanduiche() : tipoSanduiche{
        return this._tSanduiche;
        }
    public set tSanduiche(tipo : tipoSanduiche){
        this._tSanduiche = tipo;
        }
        
    public get pao() : pao{
        return this._pao;
        }
    public set pao(tipo : pao){
        this._pao = tipo;
        }
        
    public get proteina() : proteina{
        return this._proteina;
        }
    public set Proteina(tipo : proteina){
        this._proteina = tipo;
        }
        
    public get salada() : salada{
        return this._salada;
        }
    public set salada(tipo : salada){
        this._salada = tipo;
        }
    }
