package br.com.eventosapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.eventosapp.models.Role;

public interface RoleRepository extends JpaRepository<Role, String>{

}
