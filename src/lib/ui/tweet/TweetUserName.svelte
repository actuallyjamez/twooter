<script lang="ts">
	export let username: string | undefined = undefined;
</script>

<a href={`/user/${username}`} class="truncate text-light-secondary text-sm" tabIndex={-1}>
	@{username}
</a>
