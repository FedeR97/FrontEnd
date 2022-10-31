
package com.portfolio.FAR.Repository;

import com.portfolio.FAR.Entity.Proyectos;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RProyectos extends JpaRepository<Proyectos,Integer>{
    Optional<Proyectos> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);

}
