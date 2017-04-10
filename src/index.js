import xs from 'xstream';
import {run} from '@cycle/run';
import {div, button, h1, h4, a, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';

function main(sources) {
  const getRandomUser$ = sources.DOM.select('.get-random').events('click')
    .map(() => {
      const randomNum = Math.round(Math.random() * 9) + 1;
      return {
        url: 'http://jsonplaceholder.typicode.com/users/' + String(randomNum),
        // WTF
        category: 'users',
        method: 'GET'
      }
    })
  // WTF select is
  const user$ = sources.HTTP.select('users')
    .flatten()
    .map(res => res.body)
    .startWith(null)
  const vdom$ = user$.map(user => 
    div('.users', [
      button('.get-random', 'Get random user'),
      user === null ? null : div('.user-deatils', [
        h1('.user-name', user.name),
        h4('.user-email', user.email),
        a('.user-website', {attrs: {href: user.website}}, user.website)
      ])
    ])
  );
  return {
    DOM: vdom$,
    HTTP: getRandomUser$
  }
}

run(main, {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
});
