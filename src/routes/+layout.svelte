<script>
	import favicon from '$lib/assets/favicon.png';
	import '$lib/style/variables.css';
	import '$lib/style/themes.css';
	import '$lib/style/assets.css';
	import { initTheme } from '$lib/utils/theme.js';
	import { onMount } from 'svelte';

	let { children } = $props();

	let adsDisabled = $state(false);

	const adHtml = `
		<!doctype html>
		<html>
		<head>
			<style>
				html, body {
					margin: 0;
					padding: 0;
					width: 160px;
					height: 600px;
					overflow: hidden;
				}
			</style>
		</head>
		<body>
			<script>
				atOptions = {
					'key': '853a20746c33f58aa634ee7b93225905',
					'format': 'iframe',
					'height': 600,
					'width': 160,
					'params': {}
				};
			<\/script>

			<script src="https://www.highrevenueformat.com/853a20746c33f58aa634ee7b93225905/invoke.js"><\/script>
		</body>
		</html>
	`;

	onMount(() => {
		initTheme();
		adsDisabled = localStorage.getItem('disableAds') === 'true';
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Home - Classroom</title>
</svelte:head>

{#if !adsDisabled}
	<div class="sidebar-ad left-ad">
		<iframe
			title="Advertisement"
			srcdoc={adHtml}
			width="160"
			height="600"
			scrolling="no"
			frameborder="0"
		></iframe>
	</div>
{/if}

<main class="site-content">
	{@render children()}
</main>

{#if !adsDisabled}
	<div class="sidebar-ad right-ad">
		<iframe
			title="Advertisement"
			srcdoc={adHtml}
			width="160"
			height="600"
			scrolling="no"
			frameborder="0"
		></iframe>
	</div>
{/if}

<style>
	.site-content {
		width: 100%;
		min-height: 100vh;
	}

	.sidebar-ad {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		width: 160px;
		height: 600px;
		z-index: 20;
	}

	.sidebar-ad iframe {
		display: block;
		border: 0;
		width: 160px;
		height: 600px;
	}

	.left-ad {
		left: 16px;
	}

	.right-ad {
		right: 16px;
	}

	/* Hide the sidebars when there isn't enough horizontal room */
	@media (max-width: 1200px) {
		.sidebar-ad {
			display: none;
		}
	}
</style>