// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    console.log('SongQueueView - initialize')
    this.collection.on('add remove', this.render, this);
    this.collection.on('ended', this.render, this)
    this.render();
  },

  render: function() {
    console.log('SongQueueView - render, this.$el:  ' + this.$el)

    //return this.$el;

    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
