$('#inativarModalBordero').on('show.bs.modal', function(event){
	
	var button = $(event.relatedTarget);
	var codigo = button.data('codigo');
	var descricao = button.data('descricao');
	var ativar = button.data('ativar');
	var caminho = button.data('action');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.attr('action');
	
	if(!action.endsWith('/')){
		action +='/';
		caminho += '/';
		codigo += '/';
	}
	console.log(action + caminho + codigo);
	console.log(ativar);
	form.attr('action',action + caminho + codigo);
	if(ativar){
		modal.find('#ativa_inativa').attr('value','PUT');
		modal.find('.modal-body span').html('Confirma ativação: '+ descricao +' ?');
	}else{
		modal.find('#ativa_inativa').attr('value','DELETE');
		modal.find('.modal-body span').html('Confirma inativação: '+ descricao +' ?');
	}
});
