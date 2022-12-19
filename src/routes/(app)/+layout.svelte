<script lang="ts">
	import clsx from "clsx";
	import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
	import Aside from "./Aside.svelte";
	import Sidebar from "$lib/ui/Sidebar.svelte";

	const queryClient = new QueryClient();
</script>

<div class="flex w-full justify-center gap-0 lg:gap-4">
	<QueryClientProvider client={queryClient}>
		<Sidebar />
		<slot />
		<Aside />
	</QueryClientProvider>
</div>
