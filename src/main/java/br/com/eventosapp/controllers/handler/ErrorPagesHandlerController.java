package br.com.eventosapp.controllers.handler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@ControllerAdvice
public class ErrorPagesHandlerController {

	@RequestMapping("/403")
	public String forbidden() {
		return "errors/403";
	}

	@RequestMapping("/404")
	public String notFound() {
		return "errors/404";
	}

	@RequestMapping("/500")
	public String internalServerError() {
		return "errors/500";
	}
	
}
