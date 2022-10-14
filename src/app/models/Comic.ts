export class Comic{
    id: number;
    nombre: string;
    yimpress: string;
    sinopsis: string;
    editorial: string;
    usuario:string;

    constructor(id: number, nombre: string, yimpress: string, sinopsis: string, editorial: string, usuario: string){
        this.id = id;
        this.nombre = nombre;
        this.yimpress = yimpress;
        this.sinopsis = sinopsis;
        this.editorial = editorial;
        this.usuario = usuario;
    }
}