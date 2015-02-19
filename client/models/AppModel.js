// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    console.log('AppModel- initialize')

    this.set('currentSong', new SongModel());
    // console.log('appmodel- set current song to: ' + JSON.stringify(this.get('currentSong')))
    this.set('songQueue', new SongQueue());
    // console.log('appmodel- set songQueue to: ' + JSON.stringify(this.get('songQueue')))

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

        // currentSong example:
        // { "url":"https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
        //    "title":"Hot Like Fire",
        //    "artist":"Aaliyah"
        // }

    params.library.on('play', function(song){
      this.set('currentSong', song);
      // console.log('appmodel- params library: ' + JSON.stringify(this.get('currentSong')))
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      console.log('appmodel- params enqueue attempt: ' + this.get('songQueue').length)
    }, this);
  }

});
