var BfiWeb = BfiWeb || {};

BfiWeb.MenuBusca = (function(){
	
	function MenuBusca(){
		this.inputNid_bordero=$('#nid_bordero');
		this.negociados=$('#negociados');
	}
	
	MenuBusca.prototype.iniciar = function(){
		this.negociados.on('click',onNegociados.bind(this));
	}
	
	function onNegociados(){
		
		console.log(this.inputNid_bordero);
	}
	
	return MenuBusca;
	
}());

$(function(){
	var menuBusca = new BfiWeb.MenuBusca();
	menuBusca.iniciar();
});
