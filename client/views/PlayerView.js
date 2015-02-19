// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    console.log('PlayerView- initialize')
  },

  setSong: function(song){
    console.log('PlayerView- set song')

    this.model = song;
    this.render();
  },

  render: function(){
    // console.log('PlayerView- this.$el - ' + this.$el.attr('src'))
    //console.log("this is this:" +JSON.stringify(this))

    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
