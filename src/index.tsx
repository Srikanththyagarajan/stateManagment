import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/application';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Application />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
