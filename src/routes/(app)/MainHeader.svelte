<script lang="ts">
	export let title: string | undefined;
</script>

<header
	class="hover-animation even z-10 bg-main-background/60 backdrop-blur-md bg-white/[0.85] h-12 px-[14px] flex items-center top-0 sticky"
>
	{#if title}
		<div class="flex gap-8">
			<h2 class="text-lg font-twitter-chirp font-bold">
				{title}
			</h2>
		</div>
	{/if}

	<slot />
</header>
