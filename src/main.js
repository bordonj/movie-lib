import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Searches from './js/movielib';

$(document).ready(function() {
  $('#userInput').submit(function(e) {
    e.preventDefault();
    let input = $('#search').val();
    console.log('searches', Searches);
    console.log('env', process.env.API_KEY);
    Searches.fetchData(input)
      .then(res => {
        console.log('res', res);
        if(res instanceof Error) {
          throw Error('error to get to res');
        }
        let str = '';
        console.log('res', res);
        const dataArr = res.data.d;
        
        for (let element of dataArr) {
          if (element.i) {
            str += `<h1>${element.l}</h1><img src='${element.i.imageUrl}'><br><br>`;
            console.log('actor name', element.l);
            console.log('img', element.i.imageUrl);
          } else {
            str += `
            <h1>${element.l}</h1>
            <p>type: ${element.q}</p>
            `;
          }
        }
        $('.output').html(str);
      })
      .catch(err => console.log('err', err));
  });
});
