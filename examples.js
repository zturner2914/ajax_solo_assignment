
$(document).ready(function() {

    $.ajax('data.json', {
        success: function(response){
            console.log(response);
            
            for(var it = 0; it < response.length; it++) {
            	var myContent = $("<div style='background:" + response[it].value + "'><p>" + response[it].color + "</p></div>");
            	$('.content-placeholder').append(myContent);
            }
            
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

})