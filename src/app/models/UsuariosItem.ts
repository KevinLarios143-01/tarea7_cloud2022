export class UsuariosItem{
    nombre: string;
    usuario: string;
    password: string;
    fecha_nac: Date;
    sexo: string;

    constructor(nombre: string, usuario: string, password: string, fecha_nac: Date, sexo: string){
        this.usuario = usuario;
        this.nombre = nombre;
        this.password = password;
        this.fecha_nac = fecha_nac;
        this.sexo = sexo;
    }
}