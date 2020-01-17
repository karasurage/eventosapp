$('#confirmaInativarModal').on('show.bs.modal', function(event){
	
	var button = $(event.relatedTarget);
	var id = button.data('id');
	var codigo = button.data('codigo');
	var descricao = button.data('descricao');
	var ativar = button.data('ativar');
	var caminho = button.data('action');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.attr('action');
	var aux; 
	console.log(aux);
	if(aux){
		aux = action;
		console.log('Variavel AUX '+aux);
	}else{
		
	}
	
	if(!action.endsWith('/')){
		action +='/';
		caminho += '/';
		codigo += '/';
	}
	if(id){				
		console.log(action + caminho + codigo+id);
		form.attr('action',action + caminho + codigo+id);
	}else{
		console.log(action + codigo);
		form.attr('action',action + codigo);
	}
	if(ativar){
		modal.find('#ativa_inativa').attr('value','PUT');
		modal.find('.modal-body span').html('Confirma ativação: '+ descricao +' ?');
	}else{
		console.log('Delete');
		modal.find('#ativa_inativa').attr('value','DELETE');
		modal.find('.modal-body span').html('Confirma inativação: '+ descricao +' ?');
	}
});

$('#confirmaInativarModal').on('hide.bs.modal', function(event){
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.attr('action');
	
	console.log(action);
	console.log(action.length);
	
	if(action.length>15){		
		form.attr('action','/bordero');
	}else{
		form.attr('action',action);
	}
			
});