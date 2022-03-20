/*
const scanf = require('scanf');

type color = 'A' | 'R' | '';

class Ficha{
  constructor(private color_: color = ''){}
  getColor(): color {
    return this.color_;
  }
}

class Celda {
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
}

class FAmarilla extends Ficha {}
class FRoja extends Ficha {}

class Conecta4 {
  private grid_: Celda[][]; // Array<Array<Ficha>> = new Array<Array<Ficha>>();
  private row_: number = 6;
  private col_: number = 7;
  private fRojas: number = 21;
  private fAmarillas: number = 21;

  constructor(){
    // this.grid_ = Array<Array<Ficha>(this.row_)>(this.col_);
    this.grid_ = []; 
    for (let i: number = 1; i <= this.row_; i++) {
      this.grid_.push([new Celda(0, i, '')]); // new Array<Ficha>());
    }
  }


      for (let i: number = 1; i <= this.row_; i++) {
        this.grid_.push([]); // new Array<Ficha>());
      }




  winCondition(color: Ficha){
    
  }

  print(){
    for (let i: number = 0; i < this.row_; i++) {
      process.stdout.write('r: ');
      
      for (let j: number = 0; j < this.col_; j++) {
        if (this.grid_[i][j].getColor() == 'A') {
          process.stdout.write('A ');
        } else if (this.grid_[i][j].getColor() == 'R') {
          process.stdout.write('R ');
        } else if (this.grid_[i][j] == undefined){
          process.stdout.write('x ');
        }
        
      } // (this.grid_[i][j] == undefined)
      console.log('|');
    }
    console.log();
  }

  showGrid(){
    for (let i: number = 0; i < this.row_; i++) {
      process.stdout.write('|');
      
      for (let j: number = 0; j < this.col_; j++) {
        if (this.grid_[i][j].getColor() == 'A') {
          process.stdout.write('A');
        } else if (this.grid_[i][j].getColor() == 'R') {
          process.stdout.write('R');
        } else {
          process.stdout.write(' ');
        }
        
      } // (this.grid_[i][j] == undefined)
      console.log('|');
    }
    console.log();
  }

  checkFullGrid(): boolean{
    let full: boolean = true;
    this.grid_.forEach((col) => {
      if (col.length < this.row_) {
        full = false;
      }
    });
    return full;
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
          if ((c < 1) || (c > 7)) {
            console.log('Error. Columna incorrecta');
          } else if (this.grid_[c].length >= this.row_) {
            wrongC = true;
            console.log('Error. Columna completa');
          } else {
            this.grid_[c].push(new Celda(0, 1, 'A'));
            console.log('meto amarilla en ', c);
            this.fAmarillas--;
          }
        } while (wrongC || (c < 1) || (c > 7));
        p1 = !p1;
        
      } else {
        
        console.log('Turno de Player 2');
        
        do {
          console.log('Introduzca columna: ');
          c = scanf('%d');
          if ((c < 1) || (c > 7)) {
            console.log('Error. Columna incorrecta');
          } else if (this.grid_[c].length >= this.row_) {
            wrongC = true;
            console.log('Error. Columna completa');
          } else {
            this.grid_[c].push(new Celda(0, 1, 'R'));
            console.log('meto roja en ', c);
            this.fRojas--;
          }
        } while (wrongC || (c < 1) || (c > 7));
        p1 = !p1;
      }
      this.showGrid();
      console.log();
      this.print();
    }
  } // Start
}

const l: Conecta4 = new Conecta4();

l.start();




  showGrid(){
    for (let i: number = 0; i < this.row_; i++) {
      process.stdout.write('|');
      
      for (let j: number = 0; j < 1; j++) {
        if (this.grid_[i][j].getColor() == 'A') {
          process.stdout.write('A');
        } else if (this.grid_[i][j].getColor() == 'R') {
          process.stdout.write('R');
        } else {
          process.stdout.write('X');
        }
        
      } // (this.grid_[i][j] == undefined)
      console.log('|');
    }
    console.log();
  }



*/