<script lang="ts">
	import type { Tag } from "masto";
	import IconButton from "../tweet/IconButton.svelte";

	export let trend: Tag;
</script>

<a href="#" class="py-[11px] px-[14px] hover-card flex justify-between ">
	<div>
		<div class="font-thin text-[13px] text-light-secondary">Politics · Trending</div>
		<div class="font-bold text-[15px] py-1">
			{trend.name}
		</div>
		<div class="font-thin text-[13px] text-light-secondary">21.4K Tweets</div>
	</div>
	<div class="text-light-secondary hover:text-primay group">
		<IconButton>
			<svg viewBox="0 0 24 24" aria-hidden="true" class="fill-current">
				<g>
					<path
						d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
					/>
				</g>
			</svg>
		</IconButton>
	</div>
</a>
