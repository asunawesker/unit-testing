import { Punto } from './formula';

describe('FormulaPuntoMedio', () => {
    let formula: Punto;

    beforeEach(() => {
        formula = new Punto();
      });
    
    it('should increment totalVotes when upvoted', () => {
    formula.puntoMedio(3, 9, -1, 5);
    
    let puntoEsperado = {
        x: 1,
        y: 7,
    }
    
    expect(formula.punto).toEqual(puntoEsperado);
    });    
})