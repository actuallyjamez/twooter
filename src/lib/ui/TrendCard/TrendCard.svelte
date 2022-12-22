<script lang="ts">
	import TrendCardTitle from "./TrendCardTitle.svelte";
	import { useQuery } from "@sveltestack/svelte-query";
	import { fetchTrendTags } from "$lib/api/trends";
	import TrendCardItem from "./TrendCardItem.svelte";

	const trends = useQuery("trends", fetchTrendTags, { initialData: [] });
</script>

<div class="bg-[#f7f9f9] mb-[14px] rounded-2xl overflow-hidden">
	<TrendCardTitle title="What's happening" />

	{#if $trends.status === "success"}
		<ul class="">
			{#each $trends.data as trend}
				<TrendCardItem {trend} />
			{/each}
		</ul>
	{/if}
</div>
