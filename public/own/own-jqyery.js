$(document).ready(function(){
    $(document).on("click", ".holyday-item", function() {
        $(".holiday-name", this ).toggleClass( "new" );
        $("img", this).toggleClass( "selected" );
        $("#fa2", this).toggleClass("fa fa-check fa-stack-1x fa-inverse");
        $("#fa1", this).toggleClass("fa fa-circle fa-stack-2x");
    });
    
});


