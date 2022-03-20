/**
* Representa la informacion de una persona
*/

export class Persona {
  constructor(private nombre: string, private apellidos: string,
              private fecha: string, private genero: string){
  }
  /**
   * @return nombre de la persona
   */
  public getNombre(): string {
    return this.nombre;
  }
  /**
   * @return  apellidos de la persona
   */
  public getApellidos(): string {
    return this.apellidos;
  }
  /**
   * @return  fecha de nacimiento de la persona
   */
  public getFecha(): string {
    return this.fecha;
  }
  /**
   * @return  genero de la persona
   */
  public getGenero(): string {
    return this.genero;
  }
  /**
   * @param g nuevo nombre de la persona
   */
  public setNombre(g: string) {
    this.nombre = g;
  }
  /**
   * @param g nuevos apellidos de la persona
   */
  public setApellidos(g: string) {
    this.apellidos = g;
  }
  /**
   * @param g nueva fecha de nacimiento de la persona
   */
  public setFecha(g: string) {
    this.fecha = g;
  }
  /**
   * @param g nuevo genero de la persona
   */
  public setGenero(g: string) {
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
  /**
   *
   * @returns correo del estudiante
   */
  public getCorreo(): string {
    return this.correo;
  }
  /**
   *
   * @param c nuevo correo del estudiante
   */
  public setCorreo(c: string){
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
  /**
   *
   * @returns numero del profesor
   */
  public getNumero(): number {
    return this.numero;
  }
  /**
   *
   * @param c nuevo numero del profesor
   */
  public setNumero(c: number){
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
  /**
   * @returns nombre de la asignatura
   */
  public getNombre(): string {
    return this.nombre;
  }
  /**
   * @returns un vector de la lista de profesores de la asignatura
   */
  public listaProfesores(): Profesor[] {
    this.profesores.forEach((element) => {
      console.log(element.getNombre() + ' ' + element.getNumero().toString());
    });
    return this.profesores;
  }
  /**
   * @returns vector de estudientes de la asisnatura
   */
  public listaAlumnos(): Estudiante[] {
    this.alumnos.forEach((element) => {
      console.log(element.getNombre() + ' ' + element.getCorreo());
    });
    return this.alumnos;
  }
}