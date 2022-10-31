
package com.portfolio.FAR.Repository;

import com.portfolio.FAR.Entity.Habilidades;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RHabilidades extends JpaRepository<Habilidades, Integer>{
    Optional<Habilidades> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
