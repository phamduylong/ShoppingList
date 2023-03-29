<script lang="ts">
	import type { ItemType } from './types';
	import { fade, fly } from 'svelte/transition';
	export let item : ItemType = { item: '', quantity: 1, note: '' };
</script>



<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>



 
<div class="item-container" in:fly="{{ y: -200, duration: 750}}" out:fade>
	<div class="item-content">	{item.item} x {item.quantity}<br />
		{#if item.note !== ''}<strong>Note: </strong>{item.note}<br />{/if}
	</div>

	<button on:click><i class="fa fa-trash" /></button>
</div>
<style>
	.item-container {
		position: relative;
		display: inline-block;
		height: 2%;
		width: 99%;
		background-color: orange;
		border-radius: 5px;
		border: black solid 1.5px;
		padding: 0.5em;
		margin: 0.5%;	
	}

	.item-content {
		word-wrap: break-word;
		height: 100%;
		width: 95%;
		margin:1%;
		font-size: 1.25vw;
	}

	button {
		position: absolute;
		top: 50%;
		right: 0.5%;
		transform: translate(-50%, -50%);
		background-color: orange;
		border: none;
		margin-left: 2%;
	}

	@media screen and (max-width: 768px) {
		.item-content {
			font-size: 2.5vw;
		}
	}
</style>
