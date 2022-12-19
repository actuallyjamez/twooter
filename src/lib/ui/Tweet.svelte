<script lang="ts">
  import type { Status } from "$lib/api/entities";
  import UserAvatar from "./UserAvatar.svelte";
  import UserName from "./UserName.svelte";
  export let status: Status;
</script>

<article>
  <a
    href=""
    class="accent-tab hover-card relative flex flex-col gap-y-4 px-4 py-3 outline-none duration-200"
  >
    <div class="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
      <div class="flex flex-col items-center gap-2">
        <UserAvatar
          src={status.account.avatar}
          alt={status.account.username}
          username={status.account.username}
        />
      </div>
      <div class="flex min-w-0 flex-col">
        <div class="flex justify-between gap-2 text-light-secondary dark:text-dark-secondary">
          <div class="flex gap-1 truncate xs:overflow-visible xs:whitespace-normal">
            <UserName
              name={status.account.username}
              username={status.account.username}
              class="text-light-primary dark:text-dark-primary"
            />
          </div>
        </div>
        <div class="whitespace-pre-line break-words text-sm">{@html status.content}</div>
      </div>
    </div>
  </a>
</article>
