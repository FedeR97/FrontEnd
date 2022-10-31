
package com.portfolio.FAR.Service;

import com.portfolio.FAR.Entity.Habilidades;
import com.portfolio.FAR.Repository.RHabilidades;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class SHabilidades {
    @Autowired
    RHabilidades rhabilidades;
    
    public List<Habilidades> list(){
        return rhabilidades.findAll();
    }
    
    public Optional<Habilidades> getOne(int id){
        return rhabilidades.findById(id);
    }
    
    public Optional<Habilidades> getByNombre(String nombre){
        return rhabilidades.findByNombre(nombre);
    }
    
    public void save(Habilidades skill){
        rhabilidades.save(skill);
    }
    
    public void delete(int id){
        rhabilidades.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rhabilidades.existsById(id);
    }
    
    public boolean existsByNombre(String nombre){
        return rhabilidades.existsByNombre(nombre);
    }
}
