import { UsuariosItem } from "./UsuariosItem";

export class UsuariosList {
    status: number;
    message: string;
    usuarios: Array<UsuariosItem>;
    key: string;

    constructor(status: number, message: string, datos: Array<UsuariosItem>,key: string) {
        this.status = status;
        this.message = message;
        this.usuarios = datos;
        this.key=key;
    }
}