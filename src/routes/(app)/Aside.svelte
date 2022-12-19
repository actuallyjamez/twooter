<script>
	import SearchBar from "$lib/ui/SearchBar.svelte";
</script>

<aside class="flex w-96 flex-col gap-4 px-4 py-3 pt-1">
	<SearchBar />
	<slot />
	<!-- <AsideFooter /> -->
</aside>
