<script lang="ts">
	import clsx from "clsx";

	export let background = "bg-[rgb(29,155,240)]";
</script>

<div class="inline-flex relative w-[17.5px] h-[17.5px] ">
	<div
		class={clsx(
			"absolute m-[-8px] inset-0 group-hover:opacity-10 opacity-0 rounded-full transition-opacity",
			background
		)}
	/>
	<slot />
</div>
