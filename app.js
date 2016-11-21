$(document).ready(function() {
    $("#slide-button").on("click", function() {
        $("#animated-div").slideToggle(1000, function() {
            // callback function: fxn that runs when another fxnality is done
            alert("Animation done!");
        });
    });

    $("#fade-button").on("click", function() {
        $("#animated-div").fadeOut(1000);
    });

    $("#custom-button").on("click", function() {
        $("#animated-div").animate({
            "margin-top": "50px",
            "margin-left": "+=50px"
        }, 1000, function() {
            $("#animated-div").slideUp();
        });


    });


});
