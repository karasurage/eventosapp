package br.com.eventosapp.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.springframework.security.core.GrantedAuthority;

@Entity
public class Role implements GrantedAuthority, Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String nomeRole;

	@ManyToMany(mappedBy = "roles")
	@JoinTable(name = "roles_usuarios", joinColumns = @JoinColumn(
			name = "roles_id", referencedColumnName = "nomeRole"),
	inverseJoinColumns = @JoinColumn(
			name = "usuarios_id", referencedColumnName = "login"))
	private List<Usuario> usuarios;

	public String getNomeRole() {
		return nomeRole;
	}

	public void setNomeRole(String nomeRole) {
		this.nomeRole = nomeRole;
	}

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}

	@Override
	public String getAuthority() {
		return this.nomeRole;
	}

}