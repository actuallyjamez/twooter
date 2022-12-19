<script lang="ts">
	import SearchBar from "$lib/ui/SearchBar.svelte";
	import TrendCard from "$lib/ui/TrendCard/TrendCard.svelte";
	import TrendCardTitle from "$lib/ui/TrendCard/TrendCardTitle.svelte";
	import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";

	// import type { PageData } from './$types';

	import Timeline from "../../(app)/explore/Timeline.svelte";
	import MainHeader from "../../(app)/MainHeader.svelte";

	const queryClient = new QueryClient();

	// export let data: PageData;
</script>

<QueryClientProvider client={queryClient}>
	<div class="w-[990px] flex justify-between">
		<div class="w-[600px] border-r border-[#eff3f4] min-h-screen">
			<MainHeader title="Latest Tweets" />
			<Timeline />
		</div>
		<div class="w-[350px] mr-[10px]">
			<div class="top-0 sticky">
				<div class="pb-[11px]">
					<SearchBar />
				</div>
				<TrendCard>
					<TrendCardTitle title="What's happening" />
				</TrendCard>
			</div>
		</div>
	</div>
</QueryClientProvider>
