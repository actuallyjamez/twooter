<script lang="ts">
  import TrendCardItem from "./TrendCardItem.svelte";

  export let title: string;
</script>

<TrendCardItem>
  <h1 class="font-twitter-chirp font-bold text-lg">{title}</h1>
</TrendCardItem>
