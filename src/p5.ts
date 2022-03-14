/**
* Representa la informacion de una persona
*/

export class Persona {
  constructor(private nombre: string, private apellidos: string,
              private fecha: string, private genero: string){
  }
  getNombre(): string {
    return this.nombre;
  }
  getApellidos(): string {
    return this.apellidos;
  }
  getFecha(): string {
    return this.fecha;
  }
  getGenero(): string {
    return this.genero;
  }

  setNombre(g: string) {
    this.nombre = g;
  }
  setApellidos(g: string) {
    this.apellidos = g;
  }
  setFecha(g: string) {
    this.fecha = g;
  }
  setGenero(g: string) {
    this.genero = g;
  }
}

/**
* Representa la informacion de una persona estudiante
* @extends Persona
*/
export class Estudiante extends Persona {
  private correo: string;
  constructor(nombre: string, apellidos: string,
              fecha: string, genero: string, mail: string) {
      super(nombre, apellidos, fecha, genero);
      this.correo = mail;
    }
  getCorreo(): string {
    return this.correo;
  }
  setCorreo(c: string){
    this.correo = c;
  }
}

/**
* Representa la informacion de una persona profesora
* @extends Persona
*/
export class Profesor extends Persona {
  private numero: number;
  constructor(nombre: string, apellidos: string,
              fecha: string, genero: string, num: number) {
      super(nombre, apellidos, fecha, genero);
      this.numero = num;
    }
  getNumero(): number {
    return this.numero;
  }
  setNumero(c: number){
    this.numero = c;
  }
}

/**
 * Representa el cunjunto de profesores que imparten una
 * asignatura con @nombre y el conjunto de profesores que
 * la imparten @profesores : profesor[] y los estudiantes
 * que la cursan @estudiantes : estudiante[]
 */
export class Asignatura {
  constructor(private nombre: string, private profesores: Profesor[],
              private alumnos: Estudiante[]) {}

  getNombre(): string {
    return this.nombre;
  }
  listaProfesores(): Profesor[] {
    this.profesores.forEach((element) => {
      console.log(element.getNombre() + ' ' + element.getNumero().toString());
    });
    return this.profesores;
  }
  listaAlumnos(): Estudiante[] {
    this.alumnos.forEach((element) => {
      console.log(element.getNombre() + ' ' + element.getCorreo());
    });
    return this.alumnos;
  }
}