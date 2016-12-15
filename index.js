
var thing;



Realeyesit.EnvironmentDetector.detect()
      .then(appendToDOM);

function appendToDOM(response){
  $(document).ready(function(){
    thing = response;
    if(thing.webcams.length > 0){
      $("body").append("<p>Ok, we've detected you have a webcam</p>" +
        "<p>" + thing.webcams.length + " unique webcam type(s) detected.</p>" +
        "<p>Here's what else we found:</p>" +
        "<p>" + JSON.stringify(thing) + "</p>");}


    else {
        $("body").append("<p>No webcam detected. Too Bad</p>");
    }
  });
}
