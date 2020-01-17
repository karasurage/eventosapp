package br.com.eventosapp.exceptions;

public class StatusErrors500Exception extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public StatusErrors500Exception(String message) {
		super(message);
	}

}
