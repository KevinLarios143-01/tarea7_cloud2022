import { Comic } from "./Comic";

export class ComicArray {
    status: number;
    message: string;
    comics: Array<Comic>;

    constructor(status: number, message: string, comics: Array<Comic>) {
        this.status = status;
        this.message = message;
        this.comics = comics;
    }
}