<script lang="ts">
	import MainContainer from "$lib/ui/MainContainer.svelte";
	import MainHeader from "../MainHeader.svelte";
	import Timeline from "$lib/ui/Timeline.svelte";
</script>

<MainContainer>
	<MainHeader title="Explore" />
	<section class="mt-0.5 xs:mt-0">
		<Timeline />
	</section>
</MainContainer>
