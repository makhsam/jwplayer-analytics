// JW Player instance
const player = jwplayer("playerContainer");

player.setup({
    playlist: 'https://cdn.jwplayer.com/v2/media/8C4bRChH'
});

/**
 * Events
 * 
 * [WITH LODASH THROTTLE] While the player is playing, 
 * this event is fired as the playback position gets updated. 
 * This event occurs once per second.
 */
player.on('time', _.throttle(function (playback) {
    // [POST] API params: user_id, video_id, playback.position, playback.duration, playback.viewable
    console.log("Position: ", playback.position, "\tDuration: ", playback.duration);
}, 1000));

/**
 * This event is used to track video starts, or plays. 
 * It fires once per media item, when playback has begun.
 */
player.on('firstFrame', function (playback) {
    console.log("First Frame: ", playback);
});

/**
 * Fired when an item completes playback.
 */
player.on('complete', function () {
    alert("Your content has completed!");
});
