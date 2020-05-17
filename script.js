$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});

var lst = new Array();
lst.push("Счастье - это не обладание тем, чего желаешь, а желание того, чем обладаешь.");
lst.push("Чудеса - там, где в них верят, и чем больше верят, тем чаще они случаются."); 
lst.push("Всюду, где можно жить, можно жить хорошо."); 
lst.push("Успех — это движение от неудачи к неудаче без потери энтузиазма."); 
lst.push("В жизни нет разочарований – только уроки."); 
lst.push("Любая проблема – это шанс проявить себя."); 
lst.push("Нет причин не идти на зов своего сердца."); 
lst.push("Лучше быть последним среди волков, чем первым среди шакалов.");
lst.push("Нельзя себя ограничивать. Чем больше вы мечтаете, тем большего добьетесь."); 
lst.push("Если падаешь со скалы в пропасть, почему бы не попробовать полететь? Что ты теряешь?."); 
//document.getElementById("quote").innerHTML = lst[Math.floor(Math.random() * lst.length)];
$( '.quote' ).text( lst[Math.floor(Math.random() * lst.length)] );
});

