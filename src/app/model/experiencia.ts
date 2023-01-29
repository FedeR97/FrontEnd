export class Experiencia {
    id?: number;
    nombreE : string;
    descripcionE : string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(nombreE: string, descripcionE: string,fechaInicio: Date, fechaFin: Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
