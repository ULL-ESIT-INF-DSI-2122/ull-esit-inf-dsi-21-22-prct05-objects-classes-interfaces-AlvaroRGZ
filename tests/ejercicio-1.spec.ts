import 'mocha';
import {expect} from 'chai';
import {Pokemon, Pokedex, Combat} from '../src/ejercicio-1';
import {pokemons} from '../src/pokemons';


describe('Pruebas de pokedex y combates pokemon', () => {
  it('Creacion de objetos pokemon y atributos pokemon', () => {
    expect(pokemons.luxray).not.to.be.equal(undefined);
    expect(pokemons.luxray.nombre).to.be.equal('luxray');
  });
  const Pokedex1 = new Pokedex([pokemons.luxray, pokemons.dialga, pokemons.garchomp]);
  it('Creacion de Pokedex y registro de pokemons', () => {
    expect(Pokedex1.isRegistered(pokemons.luxray)).to.be.equal(true);
  });
  it('Lista de pokemons', () => {
    expect(Pokedex1.list).to.be.deep.equal([pokemons.luxray, pokemons.dialga, pokemons.garchomp]);
  });
  it('Combates de pokemons', () => {
    const c1 = new Combat(pokemons.luxray, pokemons.garchomp);
    expect(c1.start()).to.be.equal(pokemons.garchomp);
  });
});