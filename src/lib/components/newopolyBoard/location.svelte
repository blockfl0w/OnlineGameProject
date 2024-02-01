<script>
	export let data;
</script>

<div class="gameBoard">
	<p>{data.name}</p>
	{#if data.type === 'property' || data.type === 'station'}
		<p>{`£${data.price}`}</p>
	{/if}
</div>
