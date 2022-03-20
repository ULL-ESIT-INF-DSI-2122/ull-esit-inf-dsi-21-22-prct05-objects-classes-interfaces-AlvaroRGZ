type type = 'agua' | 'hierba' | 'fuego' | 'electrico'

export class Pokemon {
  constructor(
    public nombre: string,
    public tipo: type,
    public peso: number,
    public altura: number,
    public ataque: number,
    public defensa: number,
    public velocidad: number,
    public vida: number){}
  
  showStatus(){
    console.log(this.nombre.toUpperCase()), ' : ', this.tipo;
    console.log(this.vida);
  }
}

export class Pokedex {
  public list: Pokemon[];
  constructor(l: Pokemon[]){
    this.list = l;
  }
  isRegistered(p: Pokemon): boolean {
    return this.list.includes(p);
  }
}

export class Combat {
  constructor(private p1: Pokemon, private p2: Pokemon){}
              // private candidates: Pokedex) {

  dañoReal(p1: Pokemon, p2: Pokemon) {
    let efectividad: number = 0;
    const fuerteContraAgua: type[] = ['hierba', 'electrico'];
    const debilContraAgua: type[] = ['fuego'];

    const fuerteContraFuego: type[] = ['agua'];
    const debilContraFuego: type[] = ['hierba'];

    const fuerteContraElectrico: type[] = [];
    const debilContraElectrico: type[] = ['agua'];

    const fuerteContraHierba: type[] = ['fuego'];
    const debilContraHierba: type[] = ['agua'];

    if (p1.tipo == p2.tipo) {
      return 50 * (p1.ataque / p2.defensa) * 0.5;
    }

    switch (p1.tipo) {
      case 'agua': {
        if (fuerteContraAgua.includes(p2.tipo)) {
          efectividad = 0.5;
        } else if (debilContraAgua.includes(p2.tipo)) {
          efectividad = 2;
        } else {
          efectividad = 1;
        }
      }
      case 'fuego': {
        if (fuerteContraFuego.includes(p2.tipo)) {
          efectividad = 0.5;
        } else if (debilContraFuego.includes(p2.tipo)) {
          efectividad = 2;
        } else {
          efectividad = 1;
        }
      }
      case 'electrico': {
        if (fuerteContraElectrico.includes(p2.tipo)) {
          efectividad = 0.5;
        } else if (debilContraElectrico.includes(p2.tipo)) {
          efectividad = 2;
        } else {
          efectividad = 1;
        }
      }
      case 'hierba': {
        if (fuerteContraHierba.includes(p2.tipo)) {
          efectividad = 0.5;
        } else if (debilContraHierba.includes(p2.tipo)) {
          efectividad = 2;
        } else {
          efectividad = 1;
        }
      }
    }
    return Math.floor(50 * (p1.ataque / p2.defensa) * efectividad);
  }

  showCombatStatus(){
    console.log(this.p1.nombre, '              ', this.p2.nombre);
    console.log(this.p1.tipo, '              ', this.p2.tipo);
    console.log(this.p1.vida, '      HP      ', this.p2.vida);
  }

  showWinner(p: Pokemon){
    console.log('----------------------------------------------');
    console.log('WINS!', p.showStatus());
  }

  start(): Pokemon{
    let attacker: Boolean = true;
    let p1Wins: Boolean = false;

    console.log('----------------------------------------------');
    console.log(this.p1.nombre, '      VS      ', this.p2.nombre);
    console.log(this.p1.vida, '      HP      ', this.p2.vida);
    console.log('----------------------------------------------');

    while ( this.p1.vida > 0 && this.p2.vida > 0) {
      if (attacker) {
        if ((this.p2.vida -= this.dañoReal(this.p1, this.p2)) < 0) {
          this.p2.vida = 0;
          p1Wins = true;
        }
      } else {
        if ((this.p1.vida -= this.dañoReal(this.p2, this.p1)) < 0) {
          this.p1.vida = 0; 
        }
      }
      this.showCombatStatus();
      attacker = !attacker;
    }
    
    if (p1Wins) {
      this.showWinner(this.p1);
      return this.p1;
    } else {
      this.showWinner(this.p2);
      return this.p2;
    }
  }
}

/*
console.log('Pruebas:');
console.log('agua vs fuego | a: 20 d: 40 = ',
    dañoEfectivo('agua', 'fuego', 20, 40));
console.log('hierba vs electrico | a: 10 d: 30 = ',
    dañoEfectivo('hierba', 'electrico', 10, 30));
console.log('fuego vs fuego | a: 20 d: 60 = ',
    dañoEfectivo('fuego', 'fuego', 20, 60));*/