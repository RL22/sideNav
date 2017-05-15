$("#nav-menu").click(function() {
  $(".nav-popOut").addClass("active");
  $("#menu").removeClass("ion-navicon").addClass("ion-ios-close-empty");
});
$("#close-menu").click(function(){
  $("#menu").addClass("ion-navicon").removeClass("ion-ios-close-empty");
  $(".nav-popOut").removeClass("active");
});
$(".icon-dropdown").click(function(){
  $(".subNav").toggleClass("show");
  $(".icon")
  .removeClass("ion-ios-arrow-right")
  .addClass("ion-ios-arrow-left");
});
