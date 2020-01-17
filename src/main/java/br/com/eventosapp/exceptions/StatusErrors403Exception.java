package br.com.eventosapp.exceptions;

public class StatusErrors403Exception extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public StatusErrors403Exception(String message) {
		super(message);
	}

}
