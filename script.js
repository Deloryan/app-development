/*****************************************
 
 Studio Deloryan
 Deloryan Hommers
 
 www.deloryan.com
 studio@deloryan.com
 
 Written for:
 Avans Hogeschool
 Mobile Development
 Cohort 2012
 
 *****************************************/

// onDeviceReady oproepen als Phonegap geladen is. Op dit moment is het document geladen, maar phonegap.js nog niet. Wanneer Phonegap is geladen en interacteerd met het native device, dan roept hij 'deviceready' aan.
document.addEventListener("deviceready", onDeviceReady, false);

$(document).ready(function(){
	// De knoppen / pagina's tonen.
	$("#page1").hide();
	$("#page2").show();
	$("#middle").css({"color":"#F1C40F"}) // Set active css
	$("#page3").hide();
	$( ".button" ).click(function(e) {
		$( ".button" ).css({"background-color":"#171c27","color":"#ffffff"}) //reset css
		$(this).css({"color":"#F1C40F"}) // Set active css
		var currentId = $(this).attr('id');
		if (currentId == "left"){
			$( "#page1" ).show();
			$( "#page2" ).hide();
			$( "#page3" ).hide();
		}
		if (currentId == "middle"){
			$( "#page1" ).hide();
			$( "#page2" ).show();
			$( "#page3" ).hide();
		}
		if (currentId == "right"){
			$( "#page1" ).hide();
			$( "#page2" ).hide();
			$( "#page3" ).show();
		}
	});
});

// Phonegap is geladen en het is nu veilig om Phonegap onderdelen te gebruiken.
function onDeviceReady() {
    // Het is nu veilig om de Phonegap API te gebruiken.
}
