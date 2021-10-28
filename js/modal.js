$(function(){
	//abrindo tela de modal junto com a página e fechando depois de 3 seg
	$("#abrir").modal("show");

	setTimeout(function(){
     $("#modal").modal("hide");
	},3000);
});