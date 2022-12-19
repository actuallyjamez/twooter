<script lang="ts">
  import { fetchPublicFeed } from "$lib/api/feed";
  import Error from "$lib/ui/Error.svelte";
  import Loading from "$lib/ui/loading.svelte";
  import Tweet from "$lib/ui/Tweet.svelte";
  import { useQuery } from "@sveltestack/svelte-query";

  const feed = useQuery("test", fetchPublicFeed, { refetchOnWindowFocus: false });
</script>

{#if $feed.status === "success"}
  <ul>
    {#each $feed.data as status}
      <Tweet {status} />
    {/each}
  </ul>
{/if}

{#if $feed.status === "error"}
  <Error message="Something went wrong" />
{/if}

{#if $feed.status === "loading"}
  <Loading class="mt-5" />
{/if}
