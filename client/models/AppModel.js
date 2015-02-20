// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    console.log('AppModel- initialize')

    this.set('currentSong', new SongModel())
    this.set('songQueue', new SongQueue());
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      console.log('appmodel- params enqueue attempt: ' + this.get('songQueue').length)
    }, this);

    this.get('songQueue').on('stop', function(){
      this.set('currentSong', '');
    }, this);

    // params.library.on('dequeue', function(song){
    //   this.get('songQueue').remove(song);
    //   var next = this.get('songQueue').at(0)
    //   this.set('currentSong', next);
    //   console.log('appmodel- params dequeue attempt: ' + JSON.stringify(this.get('songQueue')))
    // }, this);
  }

});
