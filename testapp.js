if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Session.get('testme');
  };

  Template.hello.preserve({
  'input[id]': function (node) { return node.id; }
  });

  Template.hello.events({
    'click #submit' : function (evt,tmpl) {
      evt.preventDefault();
      Session.set('testme', tmpl.find('#idone').value)
      console.log("You pressed the button");
  }});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
