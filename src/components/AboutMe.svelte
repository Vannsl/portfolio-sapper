<script>
  import Article from "./Article.svelte";
  import Spacing from "./Spacing.svelte";
  import Header from "./Header.svelte";
  import OutgoingLink from "./OutgoingLink.svelte";
</script>

<Header title="about me" />
<div>
  <Article background="sm:bg-white dark:bg-dark">
    <div
      class="sm:my-10 my-5 mx-auto border dark:border-dark rounded-full w-full max-w-300-px h-300-px bg-center bg-cover shadow-md"
      style="background-image: url('vannsl.jpg')"
    />

    <p class="md:px-4 text-tertiary dark:text-tertiary-light">
      Hi, nice to meet you!<br />My name is Vanessa. I am a Engineering Manager & Senior Frontend Developer. I
      have an M.Sc in Media Informatics with a focus on
      Human-Computer-Interaction. I'm the Head of Frontend at
      <OutgoingLink
        href="https://www.zavvy.io/?utm_source=vannsl&amp;utm_medium=referral&amp;utm_campaign=website&amp;utm_content=frontend"
        >Zavvy</OutgoingLink
      >. I'm a co-host of the podcasts <OutgoingLink
        href="https://expect-exception.netlify.app/"
        >expect(Exception)</OutgoingLink
      >, <OutgoingLink href="https://www.workingdraft.de"
        >Working Draft</OutgoingLink
      >, and <OutgoingLink href="https://ausbaufaehig-podcast.de/"
        >Ausbaufähig</OutgoingLink
      >. I'm a public speaker. I was the Chapter Leader for DACH of the <OutgoingLink
        href="https://www.vuevixens.org/">Frontend Foxes</OutgoingLink
      > until 2021. I was a member of the JS Kongress Program Committee 2020.<br
      /><br />
      Feel free to send me a message on <OutgoingLink
        href="https://x.com/vannsl">X</OutgoingLink
      >, <OutgoingLink
      href="https://elk.zone/hachyderm.io/@vanessa_otto">Mastodon</OutgoingLink
    >, <OutgoingLink
    href="https://www.linkedin.com/in/vannsl/?originalSubdomain=de">LinkedIn</OutgoingLink
  > or   <a href="mailto:mail@vannsl.io" class="text-link dark:text-link-light hover:underline">email</a>.
    </p>
    <Spacing />
    <Spacing />
  </Article>
</div>
