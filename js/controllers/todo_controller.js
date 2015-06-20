Todos.TodoController = Ember.ObjectController.extend({

  // initial isEditing value of false for controllers of this type
  isEditing: false,

  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    }
  },

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
// isCompleted is marked as a computed property. Computed properties let you
// declare functions as properties:
// http://guides.emberjs.com/v1.10.0/object-model/computed-properties/
});
