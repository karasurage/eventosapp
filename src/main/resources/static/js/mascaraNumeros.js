$(function(){
	var decimal = $('.js-decimal');
	decimal.maskMoney({thousands:'.', decimal:','});
	
	var plain = $('.js-plain');
	plain.maskMoney({precision:0, thousands:'.'});
	
	var percent = $('.js-percent');
	percent.maskMoney({thousands:'.', decimal:',', precision: 2});
});