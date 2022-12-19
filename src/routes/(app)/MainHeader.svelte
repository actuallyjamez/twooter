<script lang="ts">
	import clsx from "clsx";

	export let title: string | undefined;
	export let disableSticky = false;
</script>

<header
	class={clsx(
		"hover-animation even z-10 bg-main-background/60 backdrop-blur-md bg-blur h-12 px-[14px] flex items-center",
		!disableSticky && "sticky top-0"
	)}
>
	<div class="">
		{#if title}
			<div class="flex gap-8">
				<h2 class="text-lg font-twitter-chirp font-bold">
					{title}
				</h2>
			</div>
		{/if}

		<slot />
	</div>
</header>
