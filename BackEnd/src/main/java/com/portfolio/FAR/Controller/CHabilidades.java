package com.portfolio.FAR.Controller;

import com.portfolio.FAR.Dto.dtoHabilidades;
import com.portfolio.FAR.Entity.Habilidades;
import com.portfolio.FAR.Security.Controller.Mensaje;
import com.portfolio.FAR.Service.SHabilidades;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/habilidades")
@CrossOrigin(origins={"https://frontendfar.web.app/","http://locashost:4200/"})

public class CHabilidades {

    @Autowired
    SHabilidades sHabilidades;

    @GetMapping("/lista")
    public ResponseEntity<List<Habilidades>> list() {
        List<Habilidades> list = sHabilidades.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Habilidades> getById(@PathVariable("id") int id) {
        if (!sHabilidades.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        Habilidades habilidades = sHabilidades.getOne(id).get();
        return new ResponseEntity(habilidades, HttpStatus.OK);
    }

    @DeleteMapping(value = {"/delete/{id}"})
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sHabilidades.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        sHabilidades.delete(id);
        return new ResponseEntity(new Mensaje("Habilidad borrada"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHabilidades dtohabilidades) {
        if (StringUtils.isBlank(dtohabilidades.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sHabilidades.existsByNombre(dtohabilidades.getNombre())) {
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        }
        Habilidades habilidades = new Habilidades(dtohabilidades.getNombre(), dtohabilidades.getPorcentaje());
        sHabilidades.save(habilidades);

        return new ResponseEntity(new Mensaje("Habilidad creada"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHabilidades dtohabilidades) {
        if (!sHabilidades.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        if (sHabilidades.existsByNombre(dtohabilidades.getNombre()) && sHabilidades.getByNombre(dtohabilidades.getNombre()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtohabilidades.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        Habilidades habilidades = sHabilidades.getOne(id).get();
        habilidades.setNombre(dtohabilidades.getNombre());
        habilidades.setPorcentaje(dtohabilidades.getPorcentaje());

        sHabilidades.save(habilidades);
        return new ResponseEntity(new Mensaje("Habilidad actualizada"), HttpStatus.OK);
    }

}
