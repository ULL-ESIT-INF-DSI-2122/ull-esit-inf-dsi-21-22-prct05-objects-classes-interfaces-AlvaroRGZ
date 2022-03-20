# Práctica 5 - DSI
## Clases


### Índice de ejercicios

-[Ejercicio 1  - Tablas de multiplicar](#e1)   


### Introducción

En este nuevo proyecto, emplearemos un desarrollo dirigido por pruebas (TDD) y estará documentado, para lo 
que vamos a valernos de tres herramientas para llevarlo a cabo:

* [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/): para incorporar TDD.
* [Typedoc](https://typedoc.org/): para realizar la documentación automática de nuestro codigo.
* [Instambul][https://istanbul.js.org/] Para mostrarnos los datos de cubrimiento de nuestros test.
* [Coveralls](https://coveralls.io/) Para llevar el seguimiento de `Instambul` en nuestro repositorio.

Continuaremos con la misma estructura de directorios basada en las anteriores prácticas, añadiendo el nuevo
directorio `test` para alojar las expectativas del código y `Typedocumentation` para almacenar la
documentación generada por `Typedoc`.

Con todo esto implementaremos 10 funciones propuestas, repasando conceptos sobre los apartados vistos en 
clase:
* [Creación de un proyecto inicial con Typescript](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html)
* [Tipos de datos estáticos](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-static-types.html)
* [Funciones](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-functions.html)
* [Arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-arrays-tuples-enums.html)
* [Objetos, clases e interfaces](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-objects-classes-interfaces.html)

## Ejercicio 1 - Pokedex 

Crearemos una clase para registrar diferentes pokemons, para representar la informacion de cada uno definimos
la siguiente clase `Pokemon`: 

```Typescript
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
```

Que representa los datos necesarios pada cada Pokemon.

La clase Pokedex consistira en un array de estos objetos y un metodo que determinara si un pokemon esta registrado
o no:

```Typescript
export class Pokedex {
  public list: Pokemon[];
  constructor(l: Pokemon[]){
    this.list = l;
  }
  isRegistered(p: Pokemon): boolean {
    return this.list.includes(p);
  }
}
```

Por último, desarrollamos la clase `Combat` que representa un combate entre dos pokemons registrados, aprovechando
la funcion en un ejercicio anterior sobre `Pokemons`. Revisaremos la clase por partes:
  
`Constructor` Recibe los pokemons
```Typescript

export class Combat {
  constructor(private p1: Pokemon, private p2: Pokemon){}
```

`Daño real` El metodo reutilizado que ya explicamos en la practica 4.
```Typescript
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
```

`howCombatStatus`Muestra el estado de los dos combatientes.
```Typescript
  showCombatStatus(){
    console.log(this.p1.nombre, '              ', this.p2.nombre);
    console.log(this.p1.tipo, '              ', this.p2.tipo);
    console.log(this.p1.vida, '      HP      ', this.p2.vida);
  }
```

`Start` La función principal, con un bucle en el que el turno va cambiando de un pokemon a otro en cada 
iteracion, se calcula el daño realizado y se le resta al contrincante hasta que uno de los dos quede sin vida.
```Typescript

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
```

Los `Pokemons` utilizados en las pruebas se definen en bateria en un fichero aparte: 

```Typescript
import {Pokemon} from './ejercicio-1';
export module pokemons {

export const luxray: Pokemon = new Pokemon(
  'luxray',
  'electrico',
  50,
  40,
  160,
  90,
  80,
  150
);

export const garchomp: Pokemon = new Pokemon(
  'garchomp',
  'fuego',
  50,
  40,
  160,
  90,
  80,
  150
);

export const dialga: Pokemon = new Pokemon(
  'dialga',
  'electrico',
  50,
  40,
  160,
  90,
  80,
  150
);

}
```



