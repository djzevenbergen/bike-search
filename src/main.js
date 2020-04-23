import { BikeSearch } from './bike-search.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';




$(document).ready(function () {

  $("#search-form").submit(function (event) {
    event.preventDefault();
    $("#output").text('');

    let zip = $('#zipcode').val();
    let dist = $("#distance").val();

    $("#zipcode").val("");
    $("#distance").val("");

    console.log(zip);
    console.log(dist);

    (async () => {
      let bikeSearch = new BikeSearch();
      const response = await bikeSearch.getBikeByZipAndDist(zip, dist);
      const responseTwo = await bikeSearch.getBikeStolenTotal(zip, dist);
      getElementsForColumn(response);
      getElementsForCount(responseTwo);
    })();
    function getElementsForColumn(response) {
      if (response) {
        $("#location").text(`These bikes are within ${dist} miles of ${zip}`);
        console.log(response);
        response.bikes.forEach(function (bike) {
          $("#output").append('<li class="bike"><a href="' + bike.url + '" target="_blank">' + bike.url + '</a><img src="' + bike.thumb + '" alt="no image available"></li><br>');
        });

      } else {
        $("#location").text("Oh no! There was an error!");
      }
    }

    function getElementsForCount(responseTwo) {
      if (responseTwo.proximity > 1) {
        $("#count").text(`There are ${responseTwo.proximity} stolen bikes in ${zip}`);
        console.log(responseTwo);
      } else if (responseTwo.proximity == 1) {
        $("#count").text(`There is ${responseTwo.proximity} stolen bike in ${zip}`);
      } else {
        $("#count").text('Ooops there was an error')
      }
    }
  });
});