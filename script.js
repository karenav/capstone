/**
 * switches to the other page.
 */
function switchPage() {
  document.getElementById(body).innerHTML = 
    ' <div class="text-content"> \
      <h1>Food Mood\' recommendation for you:</h1> \
      <ol id="place">\
        <div class="place-container"> \
          <li> Foo sushi </li> <br> \
          <a href="http://www.fusushi.co.il/"> <span title = "Fu sushi">Restaurant\'s website</span> </a><br> \
          <small> <a href="https://www.google.com/maps/place/%D7%A1%D7%95%D7%A9%D7%99+%D7%A4%D7%95%E2%80%AD/@32.0944673,34.7789349,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4bf5069206ff:0x8de56f3e396b2108!8m2!3d32.0944673!4d34.7767462?hl=iw"> \
              <span title = "Fu sushi on google maps">Open in google maps</span> </a> </small> \
        </div> \
        <div class="place-container"> \
          <li> Sushi Moon </li> <br> \
          <a href="https://www.moon-sushi.co.il/"> <span title = "Sushi Moon">Restaurant\'s website</span> </a><br> \
          <small> <a href="https://www.google.com/maps/search/%D7%A1%D7%95%D7%A9%D7%99+%D7%9E%D7%95%D7%9F%E2%80%AD/@32.1167451,34.8242032,13.07z?hl=iw"> \
            <span title = "Sushi Moon on google maps">Open in google maps</span></a></small> \
        </div> \
       <div class="place-container"> \
          <li> Ze sushi </li> <br> \
          <a href="https://www.zesushi.co.il/"> <span title = "Ze sushi">Restaurant\'s website</span> </a> <br> \
          <small> <a href="https://www.google.com/maps/search/%D7%96%D7%94+%D7%A1%D7%95%D7%A9%D7%99%E2%80%AD/@32.0729204,34.7942366,14.86z?hl=iw"> \
            <span title = "Ze sushi on google maps">Open in google maps</span> </a></small> \
        </div> \
      </ol> \
      <div id ="map-container"> <img src="/images/PlacesOnMap.png" alt="places on map" width="300" height="390"></div> \
      <div id = "feedback-box"> \
        <form action="/action_page.php"> \
        <label for="liking-feedback">Like these options?<br> Let us know what you chose: <br></label> \
        <select class="button" name="feedback" id="feedback"> \
        <option value="1">First option</option> \
        <option value="2">Second option</option> \
        <option value="3">Third option</option> \
        </select> <br><br> \
        <label for="disliking-feedback">Don\'t like these options? <br></label> \
        <button onclick=""><b>Try again</b></button> \
        </form> \
      </div> \
    </div> '
}