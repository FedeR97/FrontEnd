
package com.portfolio.FAR.Controller;

import com.portfolio.FAR.Dto.dtoProyectos;
import com.portfolio.FAR.Entity.Proyectos;
import com.portfolio.FAR.Security.Controller.Mensaje;
import com.portfolio.FAR.Service.SProyectos;
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
@RequestMapping("/proyectos")
@CrossOrigin(origins={"https://frontendfar.web.app/","http://locashost:4200/"})

public class CProyectos {
    @Autowired
    SProyectos sProyectos;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Proyectos>> list() {
        List<Proyectos> list = sProyectos.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Proyectos> getById(@PathVariable("id") int id) {
        if (!sProyectos.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        Proyectos proyectos = sProyectos.getOne(id).get();
        return new ResponseEntity(proyectos, HttpStatus.OK);
    }

    @DeleteMapping(value = {"/delete/{id}"})
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sProyectos.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        sProyectos.delete(id);
        return new ResponseEntity(new Mensaje("Proyecto eliminado con exito"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoProyectos dtoproyectos) {
        if (StringUtils.isBlank(dtoproyectos.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if (sProyectos.existsByNombre(dtoproyectos.getNombre())) {
            return new ResponseEntity(new Mensaje("Este proyecto ya existe"), HttpStatus.BAD_REQUEST);
        }
        Proyectos proyectos = new Proyectos(dtoproyectos.getNombre(), dtoproyectos.getDescripcion(),dtoproyectos.getImg());
        sProyectos.save(proyectos);

        return new ResponseEntity(new Mensaje("Proyecto creado"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoProyectos dtoproyectos) {
        if (!sProyectos.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        }
        if (sProyectos.existsByNombre(dtoproyectos.getNombre()) && sProyectos.getByNombre(dtoproyectos.getNombre()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese proyecto ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoproyectos.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        Proyectos proyectos = sProyectos.getOne(id).get();
        proyectos.setNombre(dtoproyectos.getNombre());
        proyectos.setDescripcion(dtoproyectos.getDescripcion());
        proyectos.setImg(dtoproyectos.getImg());

        sProyectos.save(proyectos);
        return new ResponseEntity(new Mensaje("Proyecto actualizada"), HttpStatus.OK);
    }

}
