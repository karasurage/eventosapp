var BfiWeb = BfiWeb || {};

BfiWeb.PesquisaBordero = (function(){
	
	function PesquisaBordero(){
		this.pesquisaBorderoBtn = $('.js-pesquisa-bordero-modal-btn');
		this.borderoModal = $('#borderoModal');
		this.dataInicial = $('#dataInicial');
		this.dataFinal = $('#dataFinal');
		this.tipoBordero = document.getElementById('cidtipobordero');
		this.tipoPortador = document.getElementById('nidtipoentidade');
		this.portador = document.getElementById('nid_empresaf');
		this.status = document.getElementById('status');
		this.containerTabelaPesquisa = $('#containerTabelaPesquisaBordero');
		this.htmlTabelaPesquisa = $('#tabelaBordero').html();
		this.template = Handlebars.compile(this.htmlTabelaPesquisa);
		this.mensagemErro = $('.js-mensagem-erro');
		this.inputInativar = $('#inativar');
		this.inputCodigo = $('#nid_bordero');
		this.btnPrimeiro = $('#primeiroBordero');
		this.btnAnterior = $('#anteriorBordero');
		this.btnProximo = $('#proximoBordero');
		this.btnUltimo = $('#ultimoBordero');
	}
	
	PesquisaBordero.prototype.iniciar = function(){
		this.pesquisaBorderoBtn.on('click',onPesquisaBorderoClicado.bind(this));
		this.borderoModal.on('hide.bs.modal',onModalClose.bind(this));
		this.inputInativar.on('change',onInativarBordero.bind(this));
		this.btnPrimeiro.on('click', onPageBordero.bind(this));
		this.btnAnterior.on('click', onPageBordero.bind(this));
		this.btnProximo.on('click', onPageBordero.bind(this));
		this.btnUltimo.on('click', onPageBordero.bind(this));
	}
	
	function onPageBordero(event){
		var p = $(event.currentTarget);
		var tipo = p.data('nome');
 
		$.ajax({
			url:'/bordero/page',
			method:'GET',
			contentType:'application/json',
			data:{
				nid_bordero: this.inputCodigo.val(),
				ctipoPage: tipo
			},
			success: onReturnIdBordero.bind(this)
		});
	}
	
	function onReturnIdBordero(result){
		this.inputCodigo.val(result);
		document.getElementById('formBuscaBordero').submit();
		
	}
	
	function onModalClose() {
		this.mensagemErro.addClass('hidden');
		this.tipoBordero.selectedIndex='0';
		this.tipoPortador.selectedIndex='0';
		this.portador.selectedIndex='0';
		this.status.selectedIndex='0';
		this.containerTabelaPesquisa.html('');		
	}
	
	function onInativarBordero(event){
		console.log(event);
	}
	
	function onPesquisaBorderoClicado(event){
		event.preventDefault();
		
		$.ajax({
			url:this.borderoModal.find('form').attr('action'),
			method:'GET',
			contentType:'application/json',
			data:{
				dataInicial: this.dataInicial.val(),
				dataFinal: this.dataFinal.val(),
				cid_tipobordero: this.tipoBordero.options[this.tipoBordero.selectedIndex].value,
				nid_tipoentidade: this.tipoPortador.options[this.tipoPortador.selectedIndex].value,
				nid_empresaf: this.portador.options[this.portador.selectedIndex].value,
				cstatus: this.status.options[this.status.selectedIndex].value
			},
			success: onPesquisaBordero.bind(this),
			error: onErrorPesquisa.bind(this)
		});
	}
	
	function onPesquisaBordero(result){
		
		var i = 0;
		$.each(result, function(){
			function tam(d) { return (d < 10) ? '0' + d : d; }
			var f = result[i].ddata;
			var date = new Date(f);
			result[i].ddata=(tam(date.getDate()) +"/"+tam(date.getMonth()+1)+"/"+tam(date.getFullYear()));			
			i++;
		});
		
		var html = this.template(result);
		this.containerTabelaPesquisa.html(html);
		
		var tabelaBorderoPesquisa = new BfiWeb.TabelaBorderoPesquisa(this.borderoModal);
		tabelaBorderoPesquisa.iniciar();
	}
	
	function onErrorPesquisa(){
		console.log("Erro!");
	}
	return PesquisaBordero;
	
}());

var BfiWeb = BfiWeb || {};

BfiWeb.TabelaBorderoPesquisa = (function () {
	
	function TabelaBorderoPesquisa(modal){
		this.modalBordero = modal
		this.titular = $('.js-bordero-pesquisa-modal');
		this.inputCodigo = $('#nid_bordero');
		this.inputData = $('#ddata');
		this.inputTipoBordero = $('#cid_tipobordero');
		this.inputTipoPortador = $('#ctipoentidade');
		this.inputPortador = $('#cnome_empresaf');
		this.inputStatus = $('#cstatus');		
	}
	
	TabelaBorderoPesquisa.prototype.iniciar = function(){
		this.titular.on('click', onBorderoSelecionado.bind(this));
	}
	
	function onBorderoSelecionado(event) {
		this.modalBordero.modal('hide');
		var borderoSelecionado = $(event.currentTarget);
		
		this.inputCodigo.val(borderoSelecionado.data('codigo'));
		this.inputData.val(borderoSelecionado.data('data'));
		this.inputTipoBordero.val(borderoSelecionado.data('tipobordero'));
		this.inputTipoPortador.val(borderoSelecionado.data('tipoentidade'));
		this.inputPortador.val(borderoSelecionado.data('portador'));
		this.inputStatus.val(borderoSelecionado.data('status'));
	}
	
	return TabelaBorderoPesquisa;
}());

$(function(){
	var pesquisaBordero = new BfiWeb.PesquisaBordero();
	pesquisaBordero.iniciar();
});