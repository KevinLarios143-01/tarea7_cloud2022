export class NewUsuario{
    nombre: string;
    usuario: string;
    password: string;
    fecha_nac: Date;
    sexo: string;

    constructor(nombre: string, usuario: string, password: string, fecha_nac: Date, sexo: string){
        this.nombre = nombre;
        this.usuario = usuario;
        this.password = password;
        this.fecha_nac = fecha_nac;
        this.sexo = sexo;
    }
}