<script lang="ts">
	import { formatDate } from "$lib/date";

	export let createdAt: string;
	export let tweetLink = "#";
</script>

<div class="group relative">
	<a href={tweetLink} class="custom-underline peer whitespace-nowrap text-sm">
		{formatDate(createdAt, "tweet")}
	</a>
</div>
