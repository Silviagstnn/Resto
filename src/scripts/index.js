import 'regenerator-runtime';
// eslint-disable-next-line import/no-unresolved
import '../styles/style.css';
import '../styles/responsive.css';
// eslint-disable-next-line import/no-unresolved, import/extensions
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#Drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
