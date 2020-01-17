$.extend( true, $.fn.dataTable.defaults, {
    "searching": false,
} );
$(document).ready(function() {
	jQuery.extend( jQuery.fn.dataTableExt.oSort, {
		 "date-br-pre": function ( a ) {
		  if (a == null || a == "") {
		   return 0;
		  }
		  var brDatea = a.split('/');
		  return (brDatea[2] + brDatea[1] + brDatea[0]) * 1;
		 },

		 "date-br-asc": function ( a, b ) {
		  return ((a < b) ? -1 : ((a > b) ? 1 : 0));
		 },

		 "date-br-desc": function ( a, b ) {
		  return ((a < b) ? 1 : ((a > b) ? -1 : 0));
		 }
	} );
	
    $('#table').dataTable( {
    	"columnDefs": [
            { type: 'date-br', targets: [0]}
        ],
    	"columnDefs": [
            { type: 'date-br', targets: [1, 2, 3]}
        ],
        /*"columnDefs": [
            { type: 'date-br', targets: 1}
        ],
        "columnDefs": [
            { type: 'date-br', targets: 2}
        ],
        "columnDefs": [
            { type: 'date-br', targets: 3}
        ],*/
        "language": {
    		"decimal": ",",
            "thousands": ".",
    		"sEmptyTable": "Nenhum registro encontrado",
    	    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
    	    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
    	    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
    	    "sInfoPostFix": "",
    	    "sInfoThousands": ".",
    	    "sLengthMenu": "_MENU_ registros por página",
    	    "sLoadingRecords": "Carregando...",
    	    "sProcessing": "Processando...",
    	    "sZeroRecords": "Nenhum registro encontrado",
    	    "sSearch": "Pesquisa",
    	    "oPaginate": {
    	        "sNext": "Próximo",
    	        "sPrevious": "Anterior",
    	        "sFirst": "Primeiro",
    	        "sLast": "Último"
    	    },
    	    "oAria": {
    	        "sSortAscending": ": Ordenar colunas de forma ascendente",
    	        "sSortDescending": ": Ordenar colunas de forma descendente"
    	    }
    	},
    	"order":[[3, 'asc']]
    } );
} );