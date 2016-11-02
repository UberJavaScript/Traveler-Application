$(document).on("click", ".holyday-item", function() {
    $(".holiday-name", this ).toggleClass( "new" );
});
$(document).on("click", "img", function() {
    $( this ).toggleClass( "selected" );
});
$(document).on("click", ".holyday-item", function() {
    $("i", this).toggleClass("fa fa-check fa-2x");
});