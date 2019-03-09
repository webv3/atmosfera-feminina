$(function(){
	$("#container #header .coll .busca label.campo input").val("Busca");
	$("#header .news_busca .busca .campo").focus(function(){
		if($(this).val() == "Busca"){
			$(this).val('');
		}
	});
	$("#header .news_busca .busca .campo").blur(function(){
		if($(this).val() == ""){
			$(this).val('Busca');
		}
	});
});