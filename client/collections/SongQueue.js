// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log('Song Q- initialize')
    this.on('add', this.enqueue, this)
    this.on('ended', this.playNext, this)

  },

  enqueue: function(song){
    if(this.length === 1){
      this.playFirst();
    }
  },

  playNext: function(){
    this.at(1).play();
  },

  playFirst: function(){
    this.at(0).play();
  }

});