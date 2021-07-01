var axios = require("axios").default;

export default class Searches {
  static async get(input) {
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: `${input}`},
      headers: {
        'x-rapidapi-key': `bf95d16b3dmsh27d4cf5aaca369bp1193f7jsn9fa26dc8141d`,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
      return error;
    });
  }
}
