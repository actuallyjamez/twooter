<script>
	import Button from "./Button.svelte";
	import SidebarLink from "./SidebarLink.svelte";

	const navLinks = [
		{
			href: "/home",
			linkName: "Home",
			iconName: "HomeIcon",
		},
		{
			href: "/explore",
			linkName: "Explore",
			iconName: "HashtagIcon",
			disabled: true,
			canBeHidden: true,
		},
		{
			href: "/notifications",
			linkName: "Notifications",
			iconName: "BellIcon",
			disabled: true,
		},
		{
			href: "/messages",
			linkName: "Messages",
			iconName: "EnvelopeIcon",
			disabled: true,
		},
		{
			href: "/bookmarks",
			linkName: "Bookmarks",
			iconName: "BookmarkIcon",
			canBeHidden: true,
		},
		{
			href: "/lists",
			linkName: "Lists",
			iconName: "Bars3BottomLeftIcon",
			disabled: true,
			canBeHidden: true,
		},
	];
</script>

<header
	id="sidebar"
	class="flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24
           lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end"
>
	<div
		class="fixed bottom-0 z-10 flex w-full flex-col justify-between border-t border-light-border 
             bg-main-background py-0 xs:top-0 xs:h-full xs:w-auto xs:border-0 
             xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72"
	>
		<section class="flex flex-col justify-center gap-2 xs:items-center xl:items-stretch">
			<h1 class="hidden xs:flex">
				<a
					href="/home"
					class="custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 
                     focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80"
				>
					<!-- <CustomIcon class='h-7 w-7' iconName='TwitterIcon' /> -->
				</a>
			</h1>
			<nav class="flex items-center justify-around xs:flex-col xs:justify-center xl:block">
				{#each navLinks as linkData}
					<SidebarLink {...linkData} />
				{/each}

				<SidebarLink href={`/user/`} linkName="Profile" />
			</nav>
			<Button
				class="accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white
                 outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0
                 xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12"
			>
				<p class="hidden xl:block">Tweet</p>
			</Button>
		</section>
	</div>
</header>
