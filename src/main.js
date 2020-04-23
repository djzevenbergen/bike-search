import { BikeSearch } from './bike-search.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function () {

  $("#search-form").submit(function (event) {
    event.preventDefault();

    let zip = $('#zipcode').val();
    let dist = $("#distance").val();
    $("#zipcode").val("");
    $("#distance").val("");

    console.log(zip);
    console.log(dist);
    (async () => {
      let bikeSearch = new BikeSearch();
      const response = await bikeSearch.getBikeByZipAndDist(zip, dist);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $("#location").text(`These bikes are within ${dist} miles of ${zip}`);
        console.log(response);
        response.bikes.forEach(function (bike) {
          $("#output").append('<p><a href="' + bike.url + '" target="_blank">' + bike.url + '</a></p><br>');
        });

      } else {
        $("#location").text("Oh no! There was an error!");
      }
    }


  });

});