<script lang="ts">
	import MainContainer from "$lib/ui/MainContainer.svelte";
	import MainHeader from "../MainHeader.svelte";
	import Timeline from "./Timeline.svelte";
</script>

<MainContainer>
	<MainHeader title="Explore" class="flex items-center justify-between" />
	<section class="mt-0.5 xs:mt-0">
		<Timeline />
	</section>
</MainContainer>
