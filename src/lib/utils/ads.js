// ADSTERRA
// ADSTERRA
let sites = [
    'https://www.profitableratecpmnetwork.com/gq87k39hs?key=829bb5eb83dab1aecc22a1013e54fcc4'
];
if (typeof window !== 'undefined') {
    let typed = '';

    window.addEventListener('keydown', (event) => {
        if (event.key.length !== 1) return;

        typed = (typed + event.key.toLowerCase()).slice(-5);

        if (typed === 'hello') {
            localStorage.setItem('disableAds', 'true');
            document.removeEventListener('mousedown', launchAds);
            alert('Ads disabled for this browser');
            typed = '';
        }
    });
}
export function launchAds() {
	if (localStorage.getItem('disableAds') === 'true') return;
	if (location.hostname.includes('localhost')) {
		return;
	} else {
		let i = Math.floor(Math.random() * sites.length);
		let newTab = window.open(sites[i]);

		if (newTab) {
			newTab.opener = null;
		}

		document.removeEventListener('mousedown', launchAds);
	}
}
