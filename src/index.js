import xs from 'xstream';
import {run} from '@cycle/run';
import {div, input, p, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  const sinks = {
    DOM: xs.of(false)
      .map(toggled =>
        div([
          input({attrs: {type: 'checkbox'}}), 'Toggle me',
          p(toggled ? 'ON' : 'off')
        ])
      )
  };
  return sinks;
}

run(main, {
  DOM: makeDOMDriver('#app'),
});
