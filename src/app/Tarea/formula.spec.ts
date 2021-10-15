import { Punto } from './formula';

describe('FormulaPuntoMedio', () => {
    let formula: Punto;

    beforeEach(() => {
        formula = new Punto();
      });
    
    it('should show the middle point (1,7)', () => {
        formula.puntoMedio(3, 9, -1, 5);
        
        let puntoEsperado = {
            x: 1,
            y: 7,
        };

        expect(formula.punto).toEqual(puntoEsperado);
    });   
    
    it('the middle point should be on the origin', () => {
        formula.puntoMedio(7, 12, -7, -12);

        let puntoEsperado = {
            x: 0,
            y: 0,
        };

        expect(formula.punto).toEqual(puntoEsperado);
    });

    it('abscissa should be on the origin', () => {
        formula.puntoMedio(1, 2,-1, 2);

        let puntoEsperado = {
            x: 0,
            y: 2,
        };

        expect(formula.punto).toEqual(puntoEsperado);
    });

    it('ordinate should be on the origin', () => {
        formula.puntoMedio(5, 2, 5, -2);

        let puntoEsperado = {
            x: 5,
            y: 0,
        };

        expect(formula.punto).toEqual(puntoEsperado);
    });
})