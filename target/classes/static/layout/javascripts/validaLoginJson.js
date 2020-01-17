$(function() {
	
	/* Recebe o valor de configuração do dns */
	var dns = "http://localhost:8080/";
	
	/* Verificação para logar vindo do Sicap  */
	var loginSicapweb = $('#usernameSicapweb').val();
	if(loginSicapweb) {
		var inputUsername = $('#username');		
		inputUsername = inputUsername.val();
		
		if (inputUsername) {
			var resposta = $.ajax({
				url : dns + 'executalogin',
				method : 'GET',
				dataType : 'jsonp',
				data : {
					username : inputUsername,
					password : ' '
				}			
			});
		resposta.done(function(users) {
			
			if(users.length == 0) {
				$('.modal-body').html('<h2>Usuário/Senha inválido</h2>');
				$('#alertaModal').on('hidden.bs.modal', function (e){
					$('#username').focus();
				}).modal({
					backdrop: false
				});
				$('#username').val('');
				$('#password').val('');
			
			} else {
				users.forEach(function(user) {
					var novoUsername = user.cid_usu;
					$('#username').val(novoUsername);
					
					var novoPassword = user.password;
					$('#password').val(novoPassword);
				});
				$('form').submit();
				
			}
		});
		
		resposta.fail(function() {
			alert('Erro carregando Login(json)');
		});
		
		} else {
			$('.modal-body').html('<h2>Informe usuário/senha</h2>');
			$('#alertaModal').on('hidden.bs.modal', function (e){
				$('#username').focus();
			}).modal({
				backdrop: false
			});
		}
	}

	/* Função que executa login via Json */
	var botao = $('#botao');
	botao.on('click', function loginJson() {
		var inputUsername = $('#username');
		inputUsername = inputUsername.val();
		var inputPassword = $('#password');
		inputPassword = inputPassword.val();
		
		if (inputUsername) {
			console.log(dns + 'executalogin');
			var resposta = $.ajax({
				url :'http://localhost:8080/executalogin',
				method : 'GET',
				dataType : 'jsonp',
				data : {
					username : inputUsername,
					password : inputPassword
				}
			});
			console.log("Resultado resposta: "+resposta);
			resposta.done(function(users) {
			console.log("Resultado users: "+users);
			if(users.length == 0) {
				$('.modal-body').html('<h2>Usuário/Senha inválido</h2>');
				$('#alertaModal').on('hidden.bs.modal', function (e){
					$('#username').focus();
				}).modal({
					backdrop: false
				});
				$('#username').val('');
				$('#password').val('');
			
			} else {
				$(function(user) {
					var novoUsername = user.cid_usu;
					$('#username').val(novoUsername);
					
					var novoPassword = user.password;
					$('#password').val(novoPassword);
				});
				$('form').submit();				
			}
		});
		
		resposta.fail(function() {
			alert('Erro carregando Login(json)');
		});
		
		} else {
			$('.modal-body').html('<h2>Informe usuário/senha</h2>');
			$('#alertaModal').on('hidden.bs.modal', function (e){
				$('#username').focus();
			}).modal({
				backdrop: false
			});
		}
	});
});