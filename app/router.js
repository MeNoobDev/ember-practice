import EmberRouter from '@ember/routing/router';
import config from 'ember-practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('campaigns');
  this.route('about');
  this.route('favourites', { path: '/favs' });
  this.route('new-user');
  this.route('posts', function () {
    this.route('new');
  });
  this.route('not-found', { path: '/*path' });
});
