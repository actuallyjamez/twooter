<script lang="ts">
	import clsx from "clsx";
	import Loading from "./loading.svelte";
	let className = "";

	export let isDisabled = false;
	export let loading = false;
	export { className as class };
</script>

<button
	type="button"
	disabled={isDisabled}
	class={clsx(
		"custom-button main-tab",
		loading && "relative !text-transparent disabled:cursor-wait",
		className
	)}
	on:click
>
	{#if loading}
		<Loading
			iconClass="h-5 w-5"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
	{/if}
	<slot />
</button>
