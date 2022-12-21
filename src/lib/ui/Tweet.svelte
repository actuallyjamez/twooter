<script lang="ts">
	import type { Status } from "$lib/api/entities";
	import TweetDate from "./tweet/TweetDate.svelte";
	import TweetUserName from "./tweet/TweetUserName.svelte";
	import UserAvatar from "./UserAvatar.svelte";
	import UserName from "./UserName.svelte";
	export let status: Status;
</script>

<article class="border-b border-[#eff3f4]">
	<div class="accent-tab hover-card relative flex flex-col gap-y-4 px-4 py-3 outline-none duration-200">
		<div class="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
			<div class="flex flex-col items-center gap-2">
				<UserAvatar
					src={status.account.avatar}
					alt={status.account.username}
					username={status.account.username}
					href={status.account.username}
				/>
			</div>
			<div class="">
				<div class="flex items-center gap-1 text-light-secondary">
					<UserName
						name={status.account.display_name}
						username={status.account.username}
					/>
					<TweetUserName username={status.account.username} />
					<i>·</i>
					<TweetDate tweetLink={"#"} createdAt={status.created_at} />
				</div>
				<div class="whitespace-pre-line break-words text-sm content ">
					{@html status.content}
				</div>
			</div>
		</div>
	</div>
</article>
