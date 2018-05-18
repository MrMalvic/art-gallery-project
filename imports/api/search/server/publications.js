
Meteor.publish("search", function(searchValue) {
    if (!searchValue) {
      return Messages.find({});
    }
    return Messages.find(
      { $text: {$search: searchValue} },
      {
        
        fields: {
          score: { $meta: "textScore" }
        },
        
        sort: {
          score: { $meta: "textScore" }
        }
      }
    );
  });
  