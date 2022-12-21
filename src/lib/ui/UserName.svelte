<script lang="ts">
	import clsx from "clsx";

	export let username: string | undefined = undefined;
	export let name: string | undefined = undefined;
	let className: string;

	export { className as class };
</script>

<a
	href={username ? `/user/${username}` : "#"}
	class={clsx(
		"flex items-center gap-1 truncate font-bold text-sm text-light-primary hover:underline",
		className
	)}
	tabIndex={username ? 0 : -1}
>
	<p class="truncate">{name}</p>
</a>
