// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="player" controls autoplay />',

  initialize: function() {
    console.log('PlayerView- initialize')
    this.$el.on('ended', function(){console.log('You can fuck off and all')})
  },

  events: {
    'ended': function(){
      
    }
  }

  setSong: function(song){
    console.log('PlayerView- set song')

    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
