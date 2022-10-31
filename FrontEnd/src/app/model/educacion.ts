export class Educacion {
    id: number;
    nombreE: string;
    descripcionE: string;
    fechaInicio: string;
    fechaFin: Date;

    constructor(nombreE: string,descripcionE: string,fechaInicio: string, fechaFin: Date){
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
