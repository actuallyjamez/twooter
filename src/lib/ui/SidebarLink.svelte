<script lang="ts">
	import clsx from "clsx";

	export let linkName: string;
	export let canBeHidden = false;
	export let href: string | undefined = undefined;
	export let disabled = false;
</script>

<a
	{href}
	{disabled}
	class={clsx(
		"group py-1 outline-none",
		canBeHidden ? "hidden xs:flex" : "flex",
		disabled && "cursor-not-allowed"
	)}
>
	<div
		class="custom-button flex items-center justify-center gap-4 self-start p-2 text-xl transition duration-200 group-hover:bg-light-primary/10 group-focus-visible:ring-2 group-focus-visible:ring-[#878a8c] xs:p-3 xl:pr-5"
	>
		<p class="hidden xl:block">{linkName}</p>
	</div>
</a>
