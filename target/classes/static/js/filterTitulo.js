var Titulo = Titulo || {}

Titulo.ComboTable = (function(){
	
	function ComboTable(){
		this.status = $('#cstatus');		
	}
	
	ComboTable.prototype.iniciar = function(){
		this.status.on('change', onSelectedStatus.bind(this));		
	}
	
	function onSelectedStatus(event){
		console.log(this.status.val());
		$("#table tbody tr").remove();
		$.ajax({
			url:'/inicio/filter',
			method:'GET',
			contentType:'application/json',
			data:{
				status: this.status.val()
			},
			success: onStatusSelect.bind(this)
		});
	}
	
	function onStatusSelect(result){		
	    var i = 0;

	    var linhas = $('#table tbody');
	    
		if(result != 0){
			$.each(result, function(){
				console.log(result[i].cdocumento);				
				result[i].cdocumento;					
				var linha = $("<tr>");
				var nome = $("<td>").attr("data-column", "Documento");
				var emissao = $("<td>").attr("data-column", "Data de Emissão");
				var vecimento = $("<td>").attr("data-column", "Data de Vencimento");
				var quitacao = $("<td>").attr("data-column", "Data de Quitação");
				var valor = $("<td>").attr("data-column", "Valor");
				var desconto = $("<td>").attr("data-column", "Desconto");
				var liquido = $("<td>").attr("data-column", "Valor Líquido");
				var boleto = $("<td>").attr("data-column", "Boleto");
				var nota = $("<td>").attr("data-column", "Nota Fiscal");
				
				nome.html(result[i].cdocumento).data("value", result[i].cdocumento);
				emissao.html(result[i].demissao).data("value", result[i].demissao);
				vecimento.html(result[i].dvencimento).data("value", result[i].dvencimentoo);
				quitacao.html(result[i].dquitacao).data("value", result[i].dquitacao);
				valor.html(result[i].nvalor).data("value", result[i].nvalor);
				desconto.html(result[i].ndesconto).data("value", result[i].ndesconto);
				liquido.html(result[i].nliquido).data("value", result[i].nliquido);
				
				
				linha.append(nome);
				linha.append(emissao);
				linha.append(vecimento);
				linha.append(quitacao);
				linha.append(valor);
				linha.append(desconto);
				linha.append(liquido);
				
				linhas.append(linha);
				i++;				
			});
		}
		
		console.log(linhas);
	}

	return ComboTable;
	
}());

$(function(){
	var ComboTable = new Titulo.ComboTable();
	ComboTable.iniciar();
});