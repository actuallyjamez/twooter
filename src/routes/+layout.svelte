<script lang="ts">
	import { queryClient } from "$lib/query";
	import { QueryClientProvider } from "@sveltestack/svelte-query";
	import "../app.css";
	import "../fonts/fonts.css";
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
