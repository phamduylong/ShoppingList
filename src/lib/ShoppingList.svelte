<script>
	import { createEventDispatcher } from 'svelte';
	import Item from './Item.svelte';
	let dispatch = createEventDispatcher();
	import Modal from './Modal.svelte';
	import { modalOpen } from './stores';
	export let shopping_list = [];
	let deleteIndex = 0;

	function openModal(index) {
		deleteIndex = index;
		modalOpen.open();
	}
</script>

<h2><b>Shopping List 🛒</b></h2>
<div id="wrapper">
	<div id="shopping_list">
		{#if shopping_list.length === 0}
			<h1>Empty list 😥 Add some items 👇</h1>
		{:else}
			{#each shopping_list as item, index}
				<Item {item} on:click={() => openModal(index)} />
			{/each}
		{/if}
	</div>
</div>
<Modal
	title="Alert!"
	message={`You are deleting item "${
		shopping_list[deleteIndex] ? shopping_list[deleteIndex].item : ''
	}". Are you sure?`}
	on:modalconfirmed={() => {
		dispatch('deleteitem', deleteIndex);
		deleteIndex = 0;
	}}
/>

<style>
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		font-size: 4vw;
	}

	#wrapper {
		margin-top: 5%;
		background-color: cadetblue;
		padding: 1.5%;
		height: 40%;
		width: 90%;
		position: absolute;
		top: 30%;
		left: 50%;
		border-radius: 2vh;
		transform: translate(-50%, -50%);
		overscroll-behavior: contain;
	}

	h2 {
		position: absolute;
		left: 50%;
		top: 5%;
		transform: translate(-50%, -50%);
		font-family: 'Courier New', sans-serif;
		font-size: 3vw;
		margin-bottom: 5%;
	}

	#shopping_list {
		background-color: cadetblue;
		max-height: 100%;
		width: 100%;
		overflow-y: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		border-radius: 2vh;
	}
</style>
