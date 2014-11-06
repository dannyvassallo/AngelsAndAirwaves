$(function(){
  var urlAbsolute = "https://s3.amazonaws.com/myfangate.com/ava/hoverimage.jpg";
  var amazonUrl = "https://s3.amazonaws.com/myfangate.com/ava/bundle";
  $( ".bundlehover" )    
    .mouseover(function() {
      $( this ).attr("src", urlAbsolute);
    })
    .mouseout(function() {
      var bundle = $(this).attr("data-bundle");
      var originalUrl = amazonUrl + bundle + ".jpg";
      $( this ).attr("src", originalUrl);
    })
    .click(function(){
      var bundle = $(this).attr("data-bundle");
      ga('send', 'event', 'Bundle Image Click', 'Bundle' + bundle );
    });
});
