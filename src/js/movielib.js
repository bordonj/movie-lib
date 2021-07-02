var axios = require("axios").default;

export default class Searches {
  static async fetchData(input) {
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: `${input}`},
      headers: {
        'x-rapidapi-key': `${process.env.API_KEY}`,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };
    console.log('got to axios');

    try {
      let data = await axios.request(options);
      console.log('axios try', data);
      return data;
      // -----used to be below without await! this didn't work----
      // .then(function (response) {
      //   console.log('axios data', response.data);
      //   return response.data;
      // })

    } catch (err) {
      console.error(err);
      // return err;
    }

  }
}
