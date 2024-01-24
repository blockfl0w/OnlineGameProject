<script>
	const games = ['newopoly', 'bingo', 'untitled-game-show', 'jeproday'];
	let show = false;
	let game = '';
	// in a var so no no weird looking html
	let backText = '<- Back';

	function selectGame(e) {
		game = e.target.id;
		show = !show;
		console.log(game);
	}
	function handleBack() {
		show = !show;
	}
</script>

<button class="menuItem" class:show={show == false} on:click={handleBack}>{backText}</button>

<div class="menu">
	<ul class="subMenu" class:show={show == true}>
		<!-- Adds each game from games arr -->
		{#each games as game}
			<li>
				<button class="menuItem" id={game} on:click={selectGame}>{game.replace(/-/g, ' ')}</button>
			</li>
		{/each}
	</ul>
</div>
<div class="menu" class:show={show == false}>
	<div class="subMenu">
		<a class="menuItem" href={`./${game.toLowerCase()}/Online/`}>Online</a>
		<a class="menuItem" href={`./${game}/local/`}>Local</a>
	</div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
	.menu {
		display: flex;
		justify-content: flex-end;
		height: 100%;
		position: fixed;
		top: 5rem;
		right: 1rem;
		width: 100%;
	}
	.subMenu {
		display: flex;
		flex-direction: column;
		rotate: -5deg;
	}
	li {
		all: unset;
		text-align: right;
	}
	.menuItem {
		all: unset;
		cursor: pointer;
		font-size: 3rem;
		font-family: 'poppins', sans-serif;
		transition: font-size 0.1s ease-out;
	}
	.menuItem:hover {
		background-color: #ff0000;
		font-size: 3.25rem;
		transition: font-size 0.1s ease-out;
		height: fit-content;
	}
	.show {
		display: none;
	}
</style>
