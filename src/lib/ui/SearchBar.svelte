<script lang="ts">
	// import clsx from "clsx";
	// import Button from "./Button.svelte";
	// let inputValue = true;
</script>

<form class="hover-animation z-10 bg-main-background h-[48px] flex items-center">
	<label
		class="group flex w-full items-center justify-between gap-4 rounded-full bg-main-search-background p-[11px] transition focus-within:bg-main-background focus-within:ring-1 focus-within:ring-main-accent"
	>
		<div class="peer pl-[9px] text-light-secondary peer-focus:text-main-accent">
			<svg class=" w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
				<g>
					<path
						d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
					/>
				</g>
			</svg>
		</div>

		<input
			class="peer flex-1 bg-transparent outline-none placeholder:text-light-secondary text-sm"
			type="text"
			placeholder="Search Twitter"
		/>
		<!-- <Button
      class={clsx(
        "accent-tab scale-50 bg-main-accent p-1 opacity-0 transition hover:brightness-90 disabled:opacity-0",
        inputValue &&
          "focus:scale-100 focus:opacity-100 peer-focus:scale-100 peer-focus:opacity-100"
      )}
    /> -->
	</label>
</form>
