<script lang="ts">
	import clsx from "clsx";

	let className = "";
	export { className as class };
	export let username: string | undefined = undefined;
	export let name: string | undefined = undefined;
</script>

<a
	href={username ? `/user/${username}` : "#"}
	class={clsx(
		"flex items-center gap-1 truncate font-bold text-sm",
		username ? "custom-underline" : "pointer-events-none",
		className
	)}
	tabIndex={username ? 0 : -1}
>
	<p class="truncate">{name}</p>
</a>
