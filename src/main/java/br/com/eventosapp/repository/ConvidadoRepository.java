package br.com.eventosapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.eventosapp.models.Convidado;
import br.com.eventosapp.models.Evento;

public interface ConvidadoRepository extends JpaRepository<Convidado, String>{

	Iterable<Convidado> findByEvento(Evento evento);
	
}
