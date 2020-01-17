var BfiWeb = BfiWeb || {};

BfiWeb.pesquisaTitular = (function(){
	
	function pesquisaTitular(){
		this.titularModal = $('#titularModal');
		this.titularInputModal = $('#nome');
		this.pesquisaTitularBtn = $('.js-pesquisa-titular-modal-btn');
		this.containerTabelaPesquisa = $('#containerTabelaPesquisaTitular');
		this.htmlTabelaPesquisa = $('#tabelaTitular').html();
		this.template = Handlebars.compile(this.htmlTabelaPesquisa);
		this.mensagemErro = $('.js-mensagem-erro');
	}
	
	pesquisaTitular.prototype.iniciar = function(){
		this.pesquisaTitularBtn.on('click', onPesquisaTitularClicado.bind(this));
		this.titularModal.on('shown.bs.modal',onModalShow.bind(this));
		this.titularModal.on('hide.bs.modal',onModalClose.bind(this));
	}
	
	function onModalShow() {
		this.titularInputModal.focus();
	}
	
	function onModalClose() {
		this.titularInputModal.val('');
		this.mensagemErro.addClass('hidden');
		this.containerTabelaPesquisa.html('');
		
	}
	
	function onPesquisaTitularClicado(event){
		event.preventDefault();
		
		$.ajax({
			url:this.titularModal.find('form').attr('action'),
			method:'GET',
			contentType:'application/json',
			data:{
				cnome_empresa: this.titularInputModal.val()
			},
			success: onPesquisaTitular.bind(this),
			error: onErrorPesquisa.bind(this)
		});
	}
	
	function onPesquisaTitular(result){
		this.mensagemErro.addClass('hidden');
		
		var html = this.template(result);
		this.containerTabelaPesquisa.html(html);
		
		var tabelaTitularPesquisa = new BfiWeb.TabelaTitularPesquisa(this.titularModal);
		tabelaTitularPesquisa.iniciar();
	}	
	
	function onErrorPesquisa(){
		this.mensagemErro.removeClass('hidden');
	}
	return pesquisaTitular;
	
}());

var BfiWeb = BfiWeb || {};

BfiWeb.TabelaTitularPesquisa = (function () {
	
	function TabelaTitularPesquisa(modal){
		this.modalTitular = modal
		this.titular = $('.js-titular-pesquisa-modal');
		this.inputTitular = $('#cnome_empresa');
		this.inputCodigo = $('#nid_empresa');
	}
	
	TabelaTitularPesquisa.prototype.iniciar = function(){
		this.titular.on('click', onTitularSelecionado.bind(this));
	}
	
	function onTitularSelecionado(event) {
		this.modalTitular.modal('hide');
		var titularSelecionado = $(event.currentTarget);
		
		this.inputTitular.val(titularSelecionado.data('nome'));
		this.inputCodigo.val(titularSelecionado.data('codigo'));
	}
	
	return TabelaTitularPesquisa;
}());

$(function(){
	var pesquisaTitular = new BfiWeb.pesquisaTitular();
	pesquisaTitular.iniciar();
});