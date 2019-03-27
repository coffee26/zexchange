if($(".zex")[0]){
	$.getJSON('https://api.exchangeratesapi.io/latest?base=KRW')
	.done(function(data){
		$('.zex').each(function() {
			var cur = $(this).attr('cur');
			if( cur == undefined ) return;
			var old = $(this).text();
			var num = Math.round(old.match(/\d+/)[0]/data.rates[cur]);
			num = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			$(this).html( old + ' <small>(약 '+ num +'원)<small>');
		})
	})
}
