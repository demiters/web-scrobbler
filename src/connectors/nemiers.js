'use strict';

Connector.playerSelector = '#__layout > div > main > div.flex';
Connector.albumSelector = 'section:nth-child(1) > div > div.bg-white > div > div > p.text-gray-600';
Connector.trackArtSelector = 'section:nth-child(1) > div > div.bg-white > div > img';

Connector.getArtistTrack = () => {
	if (isPlayingLiveRadio1()) {
		const artist = $('section:nth-child(1) > div > div.bg-white > div > div > p.text-gray-900').text();
	  const track = $('section:nth-child(1) > div > div.bg-white > div > div > h2').text();
	  return { artist, track };
	}

	if (isPlayingLiveRadio2()) {
		const artist = $('section:nth-child(2) > div > div.bg-white > div > div > p.text-gray-900').text();
	  const track = $('section:nth-child(2) > div > div.bg-white > div > div > h2').text();
	  return { artist, track };
	}
};

Connector.isPlaying = () => {
	return isPlayingLiveRadio1() || isPlayingLiveRadio2();
};

function isPlayingLiveRadio1() {
  return $('section:nth-child(1) > div > button .play-state-playing').length === 1;
}

function isPlayingLiveRadio2() {
  return $('section:nth-child(2) > div > button .play-state-playing').length === 1;
}
