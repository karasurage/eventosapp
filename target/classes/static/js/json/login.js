$(function() {
	
	var url_atual = window.location.href;
	rst = url_atual.substring(url_atual.length - 1, url_atual.length);
	var inputMatricula = $('#ccpf');
	var inputSenha = $('#csenha');
	
	console.log(inputMatricula.value);
	console.log(inputSenha.value);
	
	if(rst == 'N'){
		$('.modal-body').html('<h3 style="text-align: center">Matrícula/CPF ou Senha inválidos.</h3>');
		$('#alertaModal').on('hidden.bs.modal', function (e) {
			$('#ccpf').focus();
		}).modal({
			backdrop: false
		});
		$('#ccpf').val('');
		$('#csenha').val('');
	}
	
});