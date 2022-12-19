<script>
  import Button from "$lib/ui/Button.svelte";
  import TwitterIcon from "$lib/ui/icons/TwitterIcon.svelte";
</script>

<svelte:head>
  <title>Twitter - It's what's happening</title>
</svelte:head>

<div class="grid min-h-screen grid-rows-[1fr,auto]">
  <main class="grid lg:grid-cols-[1fr,45vw]">
    <div class="relative hidden justify-center lg:flex">
      <img
        class="object-cover w-full flex-grow"
        src="/assets/twitter-banner.png"
        alt="Twitter banner"
      />
      <!-- <i class="absolute items-center">
        <TwitterIcon class="h-96 w-96 text-white" />
      </i> -->
    </div>
    <div
      class="flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center"
    >
      <i class="mb-0 self-center lg:mb-10 lg:self-auto">
        <TwitterIcon
          class="-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon"
        />
      </i>
      <div class="flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16">
        <h1
          class="text-3xl before:content-['See_what’s_happening_in_the_world_right_now.'] 
                     lg:text-6xl lg:before:content-['Happening_now']"
        />
        <h2 class="hidden text-xl lg:block lg:text-3xl">Join Twittern't today.</h2>
      </div>
      <div class="flex max-w-xs flex-col gap-6 [&_button]:py-2">
        <div class="grid gap-3 font-bold">
          <Button
            class="cursor-not-allowed bg-accent-blue text-white transition hover:brightness-90
                       focus-visible:!ring-accent-blue/80 focus-visible:brightness-90 active:brightness-75"
          >
            Sign up with phone or email
          </Button>
          <p
            class="inner:custom-underline inner:custom-underline text-center text-xs
                       text-light-secondary inner:text-accent-blue dark:text-dark-secondary"
          >
            By signing up, you agree to the{" "}
            <a href="https://twitter.com/tos" target="_blank" rel="noreferrer">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/privacy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            , including{" "}
            <a
              href="https://help.twitter.com/rules-and-policies/twitter-cookies"
              target="_blank"
              rel="noreferrer"
            >
              Cookie Use
            </a>
            .
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <p class="font-bold">Already have an account?</p>
          <Button
            class="border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10
                       focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20
                       dark:border-light-secondary"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  </main>
  <!-- <LoginFooter /> -->
</div>
