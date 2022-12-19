<script lang="ts">
	import clsx from "clsx";
	import { formatDate } from "$lib/date";

	export let createdAt: string;
	export let tweetLink = "#";
</script>

<div class="flex">
	<div class="group relative">
		<a href={tweetLink} class={clsx("custom-underline peer whitespace-nowrap text-sm")}>
			{formatDate(createdAt, "tweet")}
		</a>
	</div>
</div>
