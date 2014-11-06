function centerLogo(){
  var lH = $('.logo').height();
  var mH = $('.masthead').height();
  var marginT = (mH - lH)/2;
  $('.logo').css({'margin-top':marginT});
}


$(window).resize(function(){
  centerLogo();
});

  centerLogo();
