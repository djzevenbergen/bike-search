import $ from 'jquery';

$(document).ready(function () {

  $("#search-form").submit(function (event) {
    event.preventDefault();

    let key = process.env.KEY;
    let koy = process.env.KOY;
    console.log(key);
    console.log(koy);

  });

});