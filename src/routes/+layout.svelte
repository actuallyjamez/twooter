<script lang="ts">
	import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
	import "../app.css";
	import "../fonts/fonts.css";
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
