<script>
	import { createEventDispatcher } from 'svelte';
	import { modalOpen } from './modalStores';
	export let title;
	export let message;
	const dispatch = createEventDispatcher();

	function acceptModal() {
		dispatch('modalconfirmed');
		modalOpen.close();
	}
</script>

{#if $modalOpen}
	<div role="dialog" class="modal">
		<div class="contents">
			<h2>{title}</h2>
			<p>{@html message}</p>
			<div class="actions">
				<button on:click={acceptModal}>Yes</button>
				<button
					on:click={() => {
						modalOpen.close();
					}}>No</button
				>
				<button
					on:click={() => {
						modalOpen.close();
					}}>Cancel</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	.contents {
		min-width: 60%;
		border-radius: 6px;
		padding: 8px;
		background: white;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}

	h2 {
		text-align: center;
		font-size: 12px;
	}

	p {
		text-align: center;
		margin-top: 8px;
	}

	.actions {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}

	button {
		box-shadow: 0px 4px 8px rgba(100, 100, 100, 0.1);
		padding: 2px;
	}

	@media only screen and (min-width: 960px) {
		.contents {
			min-width: 360px;
			border-radius: 6px;
			padding: 16px;
			background: white;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			pointer-events: auto;
		}

		h2 {
			text-align: center;
			font-size: 16px;
		}

		p {
			text-align: center;
			margin-top: 12px;
		}

		.actions {
			margin-top: 32px;
			display: flex;
			justify-content: space-between;
		}

		button {
			box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
			padding: 4px;
		}

		button:hover {
			transform: translateY(-7px);
		}
	}
</style>
