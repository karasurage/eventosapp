var BfiWeb = BfiWeb || {};

BfiWeb.MascaraCpfCnpj = (function(){
	
	function MascaraCpfCnpj(){
		this.radioTipoPessoa = $('.js-radio-tipo-pessoa');
		this.labelCnpjCpf = $('[for=documento]');
		this.inputDocumento = $('#documento');
		this.inputCpf = $('#ccpf');
		this.inputCep = $('#ccep');
		this.inputCnpj = $('#ccgc');
		this.inputFone1 = $('#cfone1');
		this.inputFone2 = $('#cfone2');
		this.inputDDD = $('#cprefixo_fone');
		this.inputUF = $('#cuf');
		this.inputData = $('#ddata');
	}
	
	MascaraCpfCnpj.prototype.iniciar = function(){
		this.radioTipoPessoa.on('change', onTipoPessoa.bind(this));
		this.inputCpf.on('focus',onMascaraCpf.bind(this));
		this.inputCep.on('focus',onMascaraCep.bind(this));
		this.inputCnpj.on('focus',onMascaraCnpj.bind(this));
		this.inputFone1.on('focus',onMascaraFone1.bind(this));
		this.inputFone2.on('focus',onMascaraFone2.bind(this));
		this.inputDDD.on('focus',onMascaraDDD.bind(this));
		this.inputUF.on('focus',onMascaraUF.bind(this));
		this.inputData.on('focus',onMascaraData.bind(this));
	}
	
	function onTipoPessoa(evento){
		var tipoSelecionada = $(evento.currentTarget);		
		this.labelCnpjCpf.text(tipoSelecionada.data('documento'));
		this.inputDocumento.mask(tipoSelecionada.data('mascara'));
		this.inputDocumento.removeAttr('disabled');
		this.inputDocumento.attr('placeholder',tipoSelecionada.data('mascara'));
		this.inputDocumento.attr('name', tipoSelecionada.data('atributo'));
		this.inputDocumento.val('');
		console.log('Documento', tipoSelecionada.data('mascara'));
	}
	
	function onMascaraCpf(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputCpf.mask(inputMascara.data('mascara'));
	}
	
	function onMascaraCnpj(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputCnpj.mask(inputMascara.data('mascara'));
	}
	
	function onMascaraCep(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputCep.mask(inputMascara.data('mascara'));
	}
	
	function onMascaraFone1(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputFone1.mask(inputMascara.data('mascara'));
	}
	
	function onMascaraFone2(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputFone2.mask(inputMascara.data('mascara'));
	}
	
	function onMascaraDDD(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputDDD.mask(inputMascara.data('mascara'));
	}
	
	function onMascaraUF(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputUF.mask(inputMascara.data('mascara'));
	}
	function onMascaraData(evento){
		var inputMascara = $(evento.currentTarget);
		this.inputData.mask(inputMascara.data('mascara'));
		this.inputData.attr('placeholder',inputMascara.data('mascara'));
	}
	
	return MascaraCpfCnpj;
}());

$(function(){
	var mascaraCpfCnpj = new BfiWeb.MascaraCpfCnpj();
	mascaraCpfCnpj.iniciar();
});