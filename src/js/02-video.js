import Player from '@vimeo/player';
import { storage } from './storageMethods';
import throttle from 'lodash.throttle';

const playerId = document.getElementById('vimeo-player');
const player = new Player(playerId);

const CURRENT_VIDEO_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(currentTimeOnVideo, 1000));
player
  .setCurrentTime(storage.readItem(CURRENT_VIDEO_TIME))
  .then(storage.readItem(CURRENT_VIDEO_TIME))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });

function setCurrentTimeCheck() {
  let currentTime = storage.readItem(CURRENT_VIDEO_TIME);
  currentTime != null && player.setCurrentTime(currentTime);
}

function currentTimeOnVideo(e) {
  if (e.seconds === e.duration) {
    storage.updateItem(CURRENT_VIDEO_TIME, (e.seconds = 0));
  } else {
    storage.updateItem(CURRENT_VIDEO_TIME, e.seconds);
  }
}
