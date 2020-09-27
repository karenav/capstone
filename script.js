// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function switchToQuery() {
  document.getElementById("query").style.display = "block";
  document.getElementById("results").style.display = "none";
}

/**
 * switches to show the results page.
 */
function switchToResults() {
  document.getElementById("query").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("results").innerHTML =
        ' <h1> Food Mood\'s recommendation for you:</h1> \
        <ol id="place"> \
        <div id="place-container"> \
        <li> Foo sushi </li> <br>  \
          <a href="https:www.fusushi"<span title = "Fu sushi">Restaurant\'s website</span></a> <br>  \
          <small> <a href="https:www.googlemapsfusushi"<span title = "Fu sushi on google maps">Open in google maps</span></a></small> \
        </div> \
        <div id="place-container"> \
        <li> Sushi Moon </li> <br>  \
          <a href="https:www.zesushi"<span title = "Sushi Moon">Restaurant\'s website</span></a> <br>  \
          <small> <a href="https:www.googlemapssushimoon"<span title = "Sushi Moon on google maps">Open in google maps</span></a></small> \
        </div> \
        <div id="place-container"> \
          <li> Ze sushi </li> <br>  \
            <a href="https:www.zesushi"<span title = "Ze sushi">Restaurant\'s website</span></a> <br>  \
            <small> <a href="https:www.googlemapszesushi"<span title = "Ze sushi on google maps">Open in google maps</span></a></small> \
        </div> \
        </ol> \
        <div id ="map-container"> <img src="PlacesOnMap.png" alt="places on map"></div> \
        <div id = "feedback-box">  \
          <form> \
            <label for="liking-feedback">Like these options?<br> Let us know what you chose: <br></label> \
            <select class="button" name="feedback" id="feedback"> \
            <option value="1">First option</option> \
            <option value="2">Second option</option> \
            <option value="3">Third option</option> \
            </select> <br><br> \
            <label for="disliking-feedback">Don\'t like these options? <br></label> \
            <button onclick=""><b>Try again</b></button> \
          </form> \
        </div> ';
}
