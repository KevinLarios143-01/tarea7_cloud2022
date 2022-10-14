export class NewComic{
    nombre: string;
    yimpress: string;
    sinopsis: string;
    editorial: string;
    usuario: string;

    constructor(nombre:string, yimpress: string, sinopsis: string, editorial: string, usuario: string){
        this.nombre = nombre;
        this.yimpress = yimpress;
        this.sinopsis = sinopsis;
        this.editorial = editorial;
        this.usuario=usuario;
    }
}