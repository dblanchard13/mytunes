// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log('Song Q- initialize')
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song){
    if(this.length === 1){
      this.playFirst();
    }
  },

  playNext: function(){
    this.shift();
    if(this.length >= 1){
      this.playFirst();      
    } else{
      this.trigger('stop');
    }
    // this.at(0).remove();
  },

  dequeue: function(song){
    if(this.at(0)===song){
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playFirst: function(){
    this.at(0).play();
  }

});