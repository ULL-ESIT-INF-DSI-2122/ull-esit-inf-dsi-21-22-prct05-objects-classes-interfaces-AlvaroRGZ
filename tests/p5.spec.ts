import 'mocha';
import {expect} from 'chai';
import {Persona, Estudiante, Profesor, Asignatura} from '../src/p5';

describe('Pruebas modificacion', () => {
  describe('Una persona tiene', () => {
    const p1 = new Persona('alv', 'Rod Gom', '1', 'M');
    it('Nombre', () => {
      expect(p1.getNombre()).to.be.eql('alv');
    });
    it('Apellidos', () => {
      expect(p1.getApellidos()).to.be.eql('Rod Gom');
    });
    it('fecha de Nacimiento', () => {
      expect(p1.getFecha()).to.be.eql('1');
    });
    it('Genero', () => {
      expect(p1.getGenero()).to.be.eql('M');
    });

    it('Se pueden cambiar', () => {
      p1.setNombre('x');
      p1.setApellidos('p');
      p1.setFecha('2');
      p1.setGenero('F');
      expect(p1.getNombre()).to.be.eql('x');
      expect(p1.getApellidos()).to.be.eql('p');
      expect(p1.getFecha()).to.be.eql('2');
      expect(p1.getGenero()).to.be.eql('F');
    });
  });

  describe('Una estudiante tiene', () => {
    const es = new Estudiante('alv', 'Rod Gom', '1', 'M', 'ull.es');
    it('Nombre', () => {
      expect(es.getNombre()).to.be.eql('alv');
    });
    it('Apellidos', () => {
      expect(es.getApellidos()).to.be.eql('Rod Gom');
    });
    it('fecha de Nacimiento', () => {
      expect(es.getFecha()).to.be.eql('1');
    });
    it('Genero', () => {
      expect(es.getGenero()).to.be.eql('M');
    });
    it('Correo', () => {
      expect(es.getCorreo()).to.be.eql('ull.es');
    });
    it('Podemos cambiar correo', () => {
      es.setCorreo('ull.com');
      expect(es.getCorreo()).to.be.eql('ull.com');
    });
  });
  describe('Un profesor tiene', () => {
    const pr = new Profesor('alv', 'Rod Gom', '1', 'M', 1234);
    it('Nombre', () => {
      expect(pr.getNombre()).to.be.eql('alv');
    });
    it('Apellidos', () => {
      expect(pr.getApellidos()).to.be.eql('Rod Gom');
    });
    it('fecha de Nacimiento', () => {
      expect(pr.getFecha()).to.be.eql('1');
    });
    it('Genero', () => {
      expect(pr.getGenero()).to.be.eql('M');
    });
    it('Numero', () => {
      expect(pr.getNumero()).to.be.eql(1234);
    });
    it('Se puede cambiar el numero', () => {
      pr.setNumero(6789);
      expect(pr.getNumero()).to.be.eql(6789);
    });
  });

  describe('Una asignatura:', () => {
    const pr1 = new Profesor('pedro', 'abc', '1', 'M', 1234);
    const pr2 = new Profesor('javi', 'def', '4', 'M', 6789);

    const e1 = new Estudiante('alvaro', 'Rod Gom', '1', 'M', 'ull.es');
    const e2 = new Estudiante('carlos', 'gs dsg', '1', 'M', 'ulpgc.es');
    const a = new Asignatura('dsi', [pr1, pr2], [e1, e2]);

    it('Nombre', () => {
      expect(a.getNombre()).to.be.eql('dsi');
    });
    it('Se listan y devuelven los profesores', () => {
      expect(a.listaProfesores()).to.be.deep.equal([pr1, pr2]);
    });
    it('Se listan y devuelven los alumnos', () => {
      expect(a.listaAlumnos()).to.be.deep.equal([e1, e2]);
    });
  });
});