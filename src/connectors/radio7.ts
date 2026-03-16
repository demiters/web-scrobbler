export {};

Connector.playerSelector = '.swiper-intro-inner';

Connector.artistTrackSelector = '#dziesma';

Connector.pauseButtonSelector = '.amazingaudioplayer-pause';

Connector.scrobblingDisallowedReason = () => {
	const artist = Connector.getArtist();
	return artist === 'Radio7' || artist === 'Radio 7' ? 'FilteredTag' : null;
};
