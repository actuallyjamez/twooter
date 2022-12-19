<script lang="ts">
  import clsx from "clsx";

  let className = "";
  export { className as class };
  export let username: string | undefined = undefined;
  export let src: string | undefined = undefined;
  export let alt: string | undefined = undefined;
  export let href: string | undefined = undefined;

</script>

<a
  href={href}
  class={clsx("blur-picture flex self-start", !username && "pointer-events-none", className)}
  tabIndex={username ? 0 : -1}

>
  <img class="rounded-full" width={43} height={43} {src} alt={alt} />
</a>
