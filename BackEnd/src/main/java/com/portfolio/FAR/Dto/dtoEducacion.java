
package com.portfolio.FAR.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Federico A Rodriguez
 */


public class dtoEducacion {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String fechaInicio;
    
    private String fechaFin;

    public dtoEducacion() {
    }


    public dtoEducacion(String nombreE, String descripcionE,String fechaInicio,String fechaFin) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(String fechaFin) {
        this.fechaFin = fechaFin;
    }

    
    
    
}
