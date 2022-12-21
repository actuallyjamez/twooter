<script lang="ts">
	import TrendCardTitle from "./TrendCardTitle.svelte";
	import { useQuery } from "@sveltestack/svelte-query";
	import { fetchTrendTags } from "$lib/api/trends";
	import TrendCardItem from "./TrendCardItem.svelte";
	import type { Tag } from "$lib/api/entities";

	const trends = useQuery("trends", fetchTrendTags, { initialData: [] });
</script>

<div class="bg-[#f7f9f9] mb-[14px] rounded-2xl overflow-hidden">
	<TrendCardTitle title="What's happening" />
	<ul class="">
		{#each $trends.data as trend}
			<TrendCardItem {trend} />
		{/each}
	</ul>
</div>
