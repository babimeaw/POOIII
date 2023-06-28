import SandwichBuilder from "./builders/SandwichBuilder";
import diretor from "./directors/diretor";
import sanduiche from "./productos/sanduiche";

const builder : SandwichBuilder = new SandwichBuilder();
const director : diretor = new diretor(builder);

diretor.constructNatural();
const natural : sanduiche= builder.sanduiche();
imprimirDetalhes(NATURAL);

director.constructVegetariano();
const vegetariano : sanduiche = builder.getsanduiche();
imprimirDetalhes(VEGETARIANO);

director.cosntructQuaresma();
const quaresma : sanduiche = builder.getsanduiche();
imprimirDetalhes(QUARESMA);

director.cosntructXFrango();
const xfrango : sanduiche = builder.getsanduiche();
imprimirDetalhes(XFRANGO);

director.cosntructCarne();
const carne : sanduiche = builder.getsanduiche();
imprimirDetalhes(CARNE);

function imprimirDetalhes(lanche : sanduiche){
console.log("Preparando Lanche: " + lanche.tipoSanduiche);
console.log("Pão: " + lanche.pao);
console.log("Proteína: " + lanche.proteina);
console.log("Salada: " + lanche.salada);
console.log("Molhos: ");
for (let molho of lanche.molho){
console.log(molho.molho)
}
}
