<script>
	import properties from '$lib/properties.json';
	import LocationRow from '../../../lib/components/newopolyBoard/locationRow.svelte';

	const characters = [1, 2, 3, 4];
	let hidden = false;
	function handleInput(e) {
		// highlights all text in field
		e.target.select();
	}
	function startGame() {
		hidden = !hidden;
		createBoard();
	}

	// name of the locations on the board

	function createBoard() {
		const boardData = JSON.parse(JSON.stringify(properties));
		const board = document.getElementById('gameBoard');
		let data = [];
		let min = 11;
		let max = 39;

		for (let i = 0; i < 11; i++) {
			// generate the data
			if (i === 0) {
				for (let j = 0; j < 11; j++) {
					data.push(Object.values(boardData)[j]);
				}
			} else if (i === 10) {
				//20 - 31
				for (let j = 20; j < 31; j++) {
					data.push(Object.values(boardData)[j]);
				}
			} else {
				data.push(Object.values(boardData)[max]);
				max--;
				data.push(Object.values(boardData)[min]);
				min++;

				console.log(data);
			}

			// create the elm
			const row = new LocationRow({
				target: board,
				props: {
					gap: i,
					elms: data
				}
			});

			data = [];
		}
	}
</script>

<section class="startScreen" class:hidden>
	<div class="players">
		{#each characters as character}
			<div class="character">
				<input type="text" value={`player ${character}`} on:click={handleInput} />
				<div class="player"></div>
			</div>
		{/each}
	</div>
	<div class="bttns">
		<button>Game settings</button>
		<button on:click={startGame}>Play</button>
	</div>
</section>
<section class="gameBoard" id="gameBoard"></section>

<style>
	.startScreen {
		position: absolute;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		color: #fff;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	.players {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.player {
		width: 100%;
		height: 20rem;
		background-color: pink;
	}
	input {
		all: unset;
		font-family: 'poppins', sans-serif;
		text-align: center;
	}
	:global(body) {
		overflow: hidden;
		margin: 0;
	}
	.bttns {
		bottom: 5rem;
		width: 50%;
		display: flex;
		justify-content: space-between;
	}
	button {
		all: unset;
		font-family: 'poppins', sans-serif;
		font-size: 2.5rem;
		background-color: orange;
		transition: 1s scale;
		padding-inline: 1rem;
	}
	button:nth-child(2) {
		background-color: green;
		padding-inline: 6rem;
	}
	button:hover {
		cursor: pointer;
		scale: 1.1;
		transition: 1s scale;
	}
	.hidden {
		top: -100vh !important;
		transition: 1s top;
	}
	.gameBoard {
		display: flex;
		flex-direction: column;
	}
</style>
