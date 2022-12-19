<script lang="ts">
	import clsx from "clsx";
	import SpinnerIcon from "./icons/SpinnerIcon.svelte";
	let className = "";

	export { className as class };
	export let iconClass: string | undefined = undefined;
</script>

<i class={clsx("flex justify-center", className ?? "p-4")}>
	<SpinnerIcon class={clsx("text-main-accent", iconClass ?? "h-7 w-7")} />
</i>
