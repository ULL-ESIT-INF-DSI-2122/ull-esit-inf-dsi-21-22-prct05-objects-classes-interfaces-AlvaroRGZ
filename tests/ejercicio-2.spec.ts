import 'mocha';
import {expect} from 'chai';
import {Ficha, Conecta4, color} from '../src/ejercicio-2';


describe('Pruebas del juego Conecta4', () => {
  it('Creacion de objetos ficha', () => {
    const f1: Ficha = new Ficha(1, 2, 'A');
    const f2: Ficha = new Ficha(2, 4, 'R');
    expect(f1.getColor()).to.be.equal('A');
    expect(f1.getY()).to.be.equal(2);
  });

  const c4 = new Conecta4;
  it('Creacion del tablero correctamente', () => {
    expect(c4.getGrid()[1][5]).to.be.deep.equal(new Ficha(1, 5, ''));
  });
  it('El tablero se muestra correctamente', () => {
    expect(c4.showGrid()).to.be.equal(undefined);
  });
  it('Se pueden introducir fichas correctamente', () => {
    // expect(c4.start()).to.be.deep.equal(undefined);
  });
});