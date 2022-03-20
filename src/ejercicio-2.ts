const scanf = require('scanf');

export type color = 'A' | 'R' | '';

export class Ficha {
  constructor(private x_: number, private y_: number, private color_: color){}
  getX(): number {
    return this.x_;
  }
  getY(): number {
    return this.y_;
  }
  getColor(): color {
    return this.color_;
  }
  setX(x: number){
    this.x_ = x;
  }
  setY(y: number){
    this.y_ = y;
  }
  setColor(c: color){
    this.color_ = c;
  }
}


export class Conecta4 {
  private grid_: Ficha[][]; // Array<Array<Ficha>> = new Array<Array<Ficha>>();
  private row_: number = 6;
  private col_: number = 7;
  private cInfo: number[] = [];

  constructor(){
    for (let i: number = 0; i < this.col_; i++) {
      this.cInfo.push(6);
    }
    this.grid_ = []; 
    for (let i: number = 0; i < this.row_; i++) {
      this.grid_.push([]); // [new Celda(i, 0, '')]);
      for (let j: number = 0; j < this.col_; j++) {
        this.grid_[i].push(new Ficha(i, j, ''));
      }
    }
  }
  getGrid(){
    return this.grid_;
  }

  showGrid(){
    for (let i: number = 0; i < this.row_; i++) {
      process.stdout.write('|');
      for (let j: number = 0; j < this.col_; j++) { // (let j: number = this.col_ - 1; j > 0; j--) {
        if (this.grid_[i][j].getColor() == 'A') {
          process.stdout.write('🟡');
        } else if (this.grid_[i][j].getColor() == 'R') {
          process.stdout.write('🔴');
        } else if (this.grid_[i][j].getColor() == '') {
          process.stdout.write('⚫');
        } else {
          process.stdout.write('E');
        }
      }
      console.log('|');
    }
  }

  start(){

    let p1: boolean = true; // Turno del player 1 o no 
    let end: boolean = false;

    while (!end) {
      let wrongC: boolean = false;
      let c: number = 0;
      if (p1) {
        console.log('Turno de Player 1');
        do {
          console.log('Introduzca columna: ');
          c = scanf('%d');
          wrongC = false;
          if ((c < 1) || (c > 7)) {
            console.log('Error. Columna incorrecta');
          } else if (this.cInfo[c - 1] <= 0) {
            wrongC = true;
            console.log('Error. Columna completa');
          } else {
            this.grid_[this.cInfo[c - 1] - 1][c - 1].setColor('A');
            this.grid_[this.cInfo[c - 1] - 1][c - 1].setX(this.cInfo[c - 1] - 1);
            this.grid_[this.cInfo[c - 1] - 1][c - 1].setY(c - 1);
            this.cInfo[c - 1]--;
            console.log('meto amarilla en ', c);
            console.log('x ', this.cInfo[c - 1] - 1);
            console.log('y ', c - 1);
          }
        } while (wrongC || (c < 1) || (c > 7));
        p1 = !p1;
        
      } else {
        
        console.log('Turno de Player 2');
        
        do {
          console.log('Introduzca columna: ');
          c = scanf('%d');
          wrongC = false;
          if ((c < 1) || (c > 7)) {
            console.log('Error. Columna incorrecta');
          } else if (this.cInfo[c - 1] <= 0) {
            wrongC = true;
            console.log('Error. Columna completa');
          } else {
            this.grid_[this.cInfo[c - 1] - 1][c - 1].setColor('R');
            this.grid_[this.cInfo[c - 1] - 1][c - 1].setX(this.cInfo[c - 1] - 1);
            this.grid_[this.cInfo[c - 1] - 1][c - 1].setY(c - 1);
            this.cInfo[c - 1]--;
            console.log('meto roja en ', c);
            console.log('x ', this.cInfo[c - 1] - 1);
            console.log('y ', c - 1);
            // this.fRojas--;
          }
          
          /* if (this.winCondition(this.grid_[this.cInfo[c - 1] - 1][c - 1])) {
            console.log('Gana p2');
          } */

        } while (wrongC || (c < 1) || (c > 7));
        p1 = !p1;
      }
      this.showGrid();
      console.log();

    }
  } // Start

  winCondition(f: Ficha): boolean{
    // let win: Boolean = false;

    let der: number = f.getX();
    let counter = 0;
    for (let i: number = 0; (i < 4) && (der + i < this.col_); ++i) {
        if (this.grid_[der + i][f.getY()]) {
            counter++;
        } else {
            counter = 0;
        }
    }
    if (counter >= 4) {
      return true;
    }

    counter = 0;

    let izq: number = f.getX();
    for (let i: number = 0; (i < 4) && (izq - i > 0); ++i) {
        if (this.grid_[izq - i][f.getY()]) {
            counter++;
        } else {
            counter = 0;
        }
    }
    if (counter >= 4) {
      return true;
    }

    counter = 0;

    let up: number = f.getY();
    for (let i: number = 0; (i < 4) && (up - i > 0); ++i) {
        if (this.grid_[f.getX()][up - i]) {
            counter++;
        } else {
            counter = 0;
        }
    }
    if (counter >= 4) {
      return true;
    }

    counter = 0;

    let down: number = f.getY();
    for (let i: number = 0; (i < 4) && (down + i < this.row_); ++i) {
        if (this.grid_[f.getX()][down + i]) {
            counter++;
        } else {
            counter = 0;
        }
    }
    if (counter >= 4) {
      return true;
    }

    return false;
  }
}
