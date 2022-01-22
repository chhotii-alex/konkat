<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
<script lang="ts">
	import { onMount } from 'svelte';
	import ConSchedule from './ConSchedule.svelte';
	import { getProgramData } from './datafetch.js';

	export let name: string;

	let promise = null;
	function getNewData() {
		promise = getProgramData();
	}
	onMount( getNewData );
</script>

<main>
	<h1 class="title">{name}</h1>

	{#if promise}
		{#await promise}
			<p>...loading</p>
		{:then schedule}
			<ConSchedule {schedule} />
		{:catch error}
			An error occurred: {error.message}
		{/await}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.title {
    	font-family: "Audiowide", sans-serif;
	}
</style>