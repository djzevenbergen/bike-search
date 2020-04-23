export class BikeSearch {
  async getBikeByZipAndDist(zip, dist) {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/bikeindex.org/api/v3/search?stolenness=proximity&location=${zip}&distance=${dist}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async getBikeStolenTotal(zip, dist) {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/bikeindex.org/api/v3/search/count?stolenness=proximity&location=${zip}&distance=${dist}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}


export function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}
