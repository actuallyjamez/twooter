<script lang="ts">
	import Timeline from "../../../lib/ui/Timeline.svelte";
	import MainHeader from "../../(app)/MainHeader.svelte";
	import SearchBar from "$lib/ui/SearchBar.svelte";
	import TrendCard from "$lib/ui/TrendCard/TrendCard.svelte";
</script>

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
			<TrendCard />
		</div>
	</div>
</div>
