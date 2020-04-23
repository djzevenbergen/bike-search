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


