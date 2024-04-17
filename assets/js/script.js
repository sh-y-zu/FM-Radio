'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/channel-logos/sirasa_fm.png",
    posterUrl: "./assets/channel-logos/sirasa_fm.png",
    title: "Sirasa FM",
    signal: "FM 106.5 / 106.7",
    country: "LK",
    artist: "Descriptionn",
    musicPath: "https://mbc.thestreamtech.com:8087/index.html"
  },
  {
    backgroundImage: "./assets/channel-logos/ran_fm.png",
    posterUrl: "./assets/channel-logos/ran_fm.png",
    title: "Ran FM",
    signal: "FM 100.5 / 88.1",
    country: "LK",
    musicPath: "http://207.148.74.192:7860/ran.mp3"
  },
  {
    backgroundImage: "./assets/channel-logos/y_fm.png",
    posterUrl: "./assets/channel-logos/y_fm.png",
    title: "Y FM",
    signal: "FM 92.7",
    country: "LK",
    musicPath: "https://mbc.thestreamtech.com:7032/index.html"
  },
  {
    backgroundImage: "./assets/channel-logos/siyatha_fm.png",
    posterUrl: "./assets/channel-logos/siyatha_fm.png",
    title: "Siyatha FM",
    signal: "FM 98.4 / 98.2",
    country: "LK",
    musicPath: "https://srv01.onlineradio.voaplus.com/siyathafm"
  },
  {
    backgroundImage: "./assets/channel-logos/hiru_fm.png",
    posterUrl: "./assets/channel-logos/hiru_fm.png",
    title: "Hiru FM",
    signal: "FM 96.3",
    country: "LK",
    musicPath: "https://radio.lotustechnologieslk.net:2020/stream/hirufmgarden"
  },
  {
    backgroundImage: "./assets/channel-logos/shaa_fm.png",
    posterUrl: "./assets/channel-logos/shaa_fm.png",
    title: "Shaa FM",
    signal: "FM 90.9 / 91.1",
    country: "LK",
    musicPath: "https://radio.lotustechnologieslk.net:2020/stream/shaafmgarden"
  },
  {
    backgroundImage: "./assets/channel-logos/neth_fm.png",
    posterUrl: "./assets/channel-logos/neth_fm.png",
    title: "Neth FM",
    signal: "FM 94.8",
    country: "LK",
    musicPath: "https://cp11.serverse.com/proxy/nethfm/stream"
  },
  {
    backgroundImage: "./assets/channel-logos/itn_fm.png",
    posterUrl: "./assets/channel-logos/itn_fm.png",
    title: "ITN FM",
    signal: "FM 93.5",
    country: "LK",
    musicPath: "https://cp12.serverse.com/proxy/itnfm/stream"
  },
  {
    backgroundImage: "./assets/channel-logos/lakhanda_radio.png",
    posterUrl: "./assets/channel-logos/lakhanda_radio.png",
    title: "Lakhanda Radio",
    signal: "FM 93.5 / 93.7",
    country: "LK",
    musicPath: "https://cp12.serverse.com/proxy/itnfm?mp=/stream"
  },
  {
    backgroundImage: "./assets/channel-logos/the_buddhist_radio.png",
    posterUrl: "./assets/channel-logos/the_buddhist_radio.png",
    title: "The Buddhist Radio",
    signal: "Unknown",
    country: "LK",
    musicPath: "http://uk7freenew.listen2myradio.com:22086/listen.pls"
  },
  {
    backgroundImage: "./assets/channel-logos/rhythm_fm.png",
    posterUrl: "./assets/channel-logos/rhythm_fm.png",
    title: "Rhythm FM",
    signal: "FM 95.6",
    country: "LK",
    musicPath: "https://srv01.onlineradio.voaplus.com/rhythmfm"
  },
  {
    backgroundImage: "./assets/channel-logos/kiss_fm.png",
    posterUrl: "./assets/channel-logos/kiss_fm.png",
    title: "Kiss FM",
    signal: "FM 95.6",
    country: "LK",
    musicPath: "https://srv01.onlineradio.voaplus.com/kissfm"
  },
  {
    backgroundImage: "./assets/channel-logos/sooriyan_fm.png",
    posterUrl: "./assets/channel-logos/sooriyan_fm.png",
    title: "Sooriyan FM",
    signal: "FM 103.6 / 103.4",
    country: "LK",
    musicPath: "https://radio.lotustechnologieslk.net:2020/stream/sooriyanfmgarden/"
  },
  {
    backgroundImage: "./assets/channel-logos/yes_fm.png",
    posterUrl: "./assets/channel-logos/yes_fm.png",
    title: "Yes FM",
    signal: "FM 100.8 / 101",
    country: "LK",
    musicPath: "https://mbc.thestreamtech.com:7056/index.html/stream"
  },
  {
    backgroundImage: "./assets/channel-logos/kothmale_fm.png",
    posterUrl: "./assets/channel-logos/kothmale_fm.png",
    title: "Kothmale FM",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://s46.myradiostream.com:11156/listen.mp3"
  },
  {
    backgroundImage: "./assets/channel-logos/colour_radio.png",
    posterUrl: "./assets/channel-logos/colour_radio.png",
    title: "Colour Radio",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://stream.zeno.fm/uo3gmts0ilivv"
  },
  {
    backgroundImage: "./assets/channel-logos/parani_gee_radio.png",
    posterUrl: "./assets/channel-logos/parani_gee_radio.png",
    title: "Parani Gee Radio",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://stream.zeno.fm/18wvhnvmd18uv"
  },
  {
    backgroundImage: "./assets/channel-logos/edm_fm_sri_lanka.png",
    posterUrl: "./assets/channel-logos/edm_fm_sri_lanka.png",
    title: "EDM FM Sri Lanka",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://stream.zeno.fm/ucqkp3kcmzzuv"
  },
  {
    backgroundImage: "./assets/channel-logos/free_fm.png",
    posterUrl: "./assets/channel-logos/free_fm.png",
    title: "Free FM",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://stream.zeno.fm/1tcs4fbw7rquv"
  },
  {
    backgroundImage: "./assets/channel-logos/rangiri_sri_lanka_radio.png",
    posterUrl: "./assets/channel-logos/rangiri_sri_lanka_radio.png",
    title: "Rangiri Sri Lanka Radio",
    signal: "FM 104.4 / 105.7",
    country: "LK",
    musicPath: "https://stream.zeno.fm/wgp8fr3f4p8uv"
  },
  {
    backgroundImage: "./assets/channel-logos/tharu_fm.png",
    posterUrl: "./assets/channel-logos/tharu_fm.png",
    title: "Tharu FM",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://ec3.yesstreaming.net:2655/stream"
  },
  {
    backgroundImage: "./assets/channel-logos/shree_fm.png",
    posterUrl: "./assets/channel-logos/shree_fm.png",
    title: "Shree FM",
    signal: "Unknown",
    country: "LK",
    musicPath: "http://207.148.74.192:7860/stream2.mp3"
  },
  {
    backgroundImage: "./assets/channel-logos/derana_fm.png",
    posterUrl: "./assets/channel-logos/derana_fm.png",
    title: "Derana FM",
    signal: "FM 92.2 / 92.4",
    country: "LK",
    musicPath: "https://player.twitch.tv/js/embed/v1.js"
  },
  {
    backgroundImage: "./assets/channel-logos/shakthi_fm.png",
    posterUrl: "./assets/channel-logos/shakthi_fm.png",
    title: "Shakthi FM",
    signal: "FM 103.9 / 104.1",
    country: "LK",
    musicPath: "http://live.trusl.com:1160/;"
  },
  {
    backgroundImage: "./assets/channel-logos/real_radio.png",
    posterUrl: "./assets/channel-logos/real_radio.png",
    title: "Real Radio",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://srv01.onlineradio.voaplus.com/realfm"
  },
  {
    backgroundImage: "./assets/channel-logos/seth_fm.png",
    posterUrl: "./assets/channel-logos/seth_fm.png",
    title: "Seth FM",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://listen.radioking.com/radio/384487/stream/435781"
  },
  {
    backgroundImage: "./assets/channel-logos/v_fm.png",
    posterUrl: "./assets/channel-logos/v_fm.png",
    title: "V FM",
    signal: "Unknown",
    country: "LK",
    musicPath: "https://dc1.serverse.com/proxy/fmlanka/stream"
  }
  
  
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-signal]");
const playerYear = document.querySelector("[data-country]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].signal;
  playerYear.textContent = musicData[currentMusic].country;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);