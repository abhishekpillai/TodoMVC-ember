// This will create a new instance of Ember.Application
// and make it available as a variable named Todos within
// your browser's JavaScript environment.
window.Todos = Ember.Application.create();

//  Adapters are responsible for communicating with a source of data for your
//  application. Typically this will be a web service API, but in this case we
//  are using an adapter designed to load fixture data:
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
