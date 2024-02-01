<script>
	import Location from './location.svelte';

	function checkGap() {
		if (gap === 0 || gap === 10) {
			return false;
		} else {
			return true;
		}
	}
	export let gap = 0;
	export let elms = [];
</script>

<div class:gap={checkGap() == true}>
	{#each elms as elm}
		<Location data={elm} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(11, 1fr);
		width: 100%;
	}
	.gap {
		grid-template-columns: 1fr 1fr;
		column-gap: calc((100% / 11) * 9);
	}
</style>
