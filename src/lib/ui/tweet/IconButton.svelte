<script lang="ts">
	import clsx from "clsx";

	let className: string = "";
	export { className as class };
</script>

<div class="inline-flex relative w-[17.5px] h-[17.5px]">
	<div
		class={clsx(
			"absolute m-[-8px] inset-0 opacity-10 rounded-full transition-colors",
			className
		)}
	/>
	<slot />
</div>
