<script lang="ts">
	export let username: string | undefined = undefined;
	export let name: string | undefined = undefined;
</script>

<a
	href={username ? `/user/${username}` : "#"}
	class="flex items-center gap-1 truncate font-bold text-sm text-light-primary hover:underline"
	tabIndex={username ? 0 : -1}
>
	<p class="truncate">{name}</p>
</a>
