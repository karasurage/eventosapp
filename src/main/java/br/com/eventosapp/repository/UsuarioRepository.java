package br.com.eventosapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.eventosapp.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
	
	Usuario findByLogin(String login);

}
