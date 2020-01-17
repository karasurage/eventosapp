package br.com.eventosapp.exceptions;

public class StatusErrors404Exception extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public StatusErrors404Exception(String message) {
		super(message);
	}

}
