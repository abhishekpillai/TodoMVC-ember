Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    },
    clearCompleted: function() {
      var completed = this.filterBy('isCompleted', true);

     // the invoke method which is part of the EmberArray API. The invoke will
     // execute a method on each object in the Array if the method exists on
     // that object
      completed.invoke('deleteRecord');
      completed.invoke('save');
    },
  },

  // If the isCompleted value of any todo changes, this property will be recomputed
  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  // if remaining changes, the inflection fn is executed
  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  //  If the isCompleted property of any todo changes, this property will be
  //  recomputed. If the return value has changed, sections of the template
  //  that need to update will be automatically updated for us.
  allAreDone: function(key, value) {
    return !!this.get('length') && this.isEvery('isCompleted');
  }.property('@each.isCompleted')
});
