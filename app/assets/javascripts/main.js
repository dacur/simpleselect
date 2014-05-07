$(document).ready(function(){
	// This is football's JS file

	var textval = $('#txtConfirm').val();

	$('#btnSend').click(function(){
			DoIt();
			console.log("You pressed send");
			// console.log("Textval =" + textval);
			// if (isNaN(textval)){
			// 	console.log("Is not a number");
			// } else {
			// 	console.log("Is a number");
			// };

	});

	function DoIt(textval){
		var name = $('#txtName').val();
		var whyAwesome = $('#txtWhy').val();
		var isAwesome = $('#isAwesome').val();

		// console.log(option + " " + name + " " + stat);
		$.ajax({
			url: '/main/saveawesome',
			type: 'POST',
			data: {name: name, isAwesome: isAwesome, whyAwesome: whyAwesome}
		});
		// }).done(function(){
		// 	for (i=0; i<1; i++){
		// 		if (i==0){
		// 			console.log("In the loop");
		// 			DoIt();
		// 		} else {
		// 			break;
		// 		};
		// 	};
			
		// 	// var old = $('#showPlayers').html();
		// 	// var html = '';
		// 	// html += '<td>' + newPlayer.name + '</td>';
		// 	// html += '<td>' + newPlayer.stat + '</td>';
		// 	// html += '<td>' + newPlayer.option + '</td>';
		// 	// // html += '</div>';

		// 	// $('#showPlayers').html(html + old);
		// 	// $('#txtName').val('');
		// 	// $('#txtStat').val('');
		// });
	};
});