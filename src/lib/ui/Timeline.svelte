<script lang="ts">
	// import type { Status } from "$lib/api/entities";
	import { fetchPublicFeed } from "$lib/api/feed";
	import Error from "$lib/ui/Error.svelte";
	import Loading from "$lib/ui/loading.svelte";
	import Tweet from "$lib/ui/Tweet.svelte";
	import { useInfiniteQuery } from "@sveltestack/svelte-query";
	// import type { Status } from "masto";

	// export let first: string;

	const feed = useInfiniteQuery(
		"timeline:public",
		({ pageParam }) => fetchPublicFeed(pageParam),
		{
			getNextPageParam: (lastPage) => lastPage.last,
			staleTime: Infinity,
		}
	);
</script>

{#if $feed.status === "success"}
	<ul>
		{#each $feed.data.pages as page}
			{#each page.data as status}
				<Tweet {status} />
			{/each}
		{/each}
	</ul>
{/if}

<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	on:click={() => $feed.fetchNextPage()}
	disabled={!$feed.hasNextPage || $feed.isFetchingNextPage}
>
	{#if $feed.isFetching}
		Loading more...
	{:else if $feed.hasNextPage}
		Load More
	{:else}Nothing more to load{/if}
</button>

{#if $feed.status === "error"}
	<Error message="Something went wrong" />
{/if}

{#if $feed.status === "loading"}
	<Loading class="mt-5" />
{/if}
