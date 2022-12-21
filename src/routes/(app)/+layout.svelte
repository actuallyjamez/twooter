<script lang="ts">
	import Aside from "./Aside.svelte";
	import Sidebar from "$lib/ui/Sidebar.svelte";
</script>

<div class="flex w-full justify-center gap-0 lg:gap-4">
	<Sidebar />
	<slot />
	<Aside />
</div>
