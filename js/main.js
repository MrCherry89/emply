$(document).ready(function() {
    
    $("body.swich-css").css("display", "none");

    $("body.swich-css").fadeIn(700);
    
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body.swich-css").fadeOut(1000, redirectPage);       
    });
        
    function redirectPage() {
        window.location = linkLocation;
    }
    
});