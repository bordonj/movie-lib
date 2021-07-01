import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Searches from './js/movielib';

$(document).ready(function() {
  $('#userInput').submit(function(e) {
    e.preventDefault();
    let input = $('#search').val();
    Searches.get(input)
      .then(function(getName) {
        console.log('getName', getName);
        if (getName instanceof Error) {
          throw Error('error to get name');
        }
        const dataArr = getName.d;
        for (let actor of dataArr) {
          console.log('actor name', actor.l);
        }
      })
      .catch(function(err) {
        console.log('in catch, err', err);
      });
  });
});
// Searches.get();
// import { Project } from 'js/project';