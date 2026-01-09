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
      class="sm:my-10 my-5 mx-auto border dark:border-dark rounded-full w-full max-w-300-px h-300-px bg-center bg-cover shadow-md profile-picture"
    />

    <p class="md:px-4 text-tertiary dark:text-tertiary-light">
      Vanessa is a Staff Frontend Developer on the AI Workflow Catalog Team at <OutgoingLink
      href="https://gitlab.com/vanessaotto"
      >GitLab</OutgoingLink
    >, where she focuses on building and maintaining the foundational elements of GitLab's design system. Previously, she was the Head of Frontend at Zavvy.io, which was acquired by Deel in 2024. She holds an M.Sc in Media Informatics with a focus on Human-Computer Interaction and co-hosts two popular podcasts, <OutgoingLink href="https://www.workingdraft.de"
    >Working Draft</OutgoingLink
  > and <OutgoingLink
  href="https://expect-exception.netlify.app/"
  >expect(Exception)</OutgoingLink
>. Vanessa is an experienced public speaker and workshop facilitator, sharing her expertise and passion for technology with diverse audiences. She has contributed to multiple conferences, serving on program committees for notable events like JS Kongress and moderating <OutgoingLink
href="https://conf.vuejs.de/"
>VueJS Germany</OutgoingLink
>.<br
      /><br />
      Feel free to send a message on <OutgoingLink
      href="https://hachyderm.io/@vanessa_otto">Mastodon</OutgoingLink
    >, <OutgoingLink
    href="https://bsky.app/profile/vannsl.bsky.social">Bluesky</OutgoingLink
  >, <OutgoingLink
    href="https://www.linkedin.com/in/vannsl/?originalSubdomain=de">LinkedIn</OutgoingLink
  > or   <a href="mailto:mail@vannsl.io" class="text-link dark:text-link-light underline">email</a>.
    </p>
    <Spacing />
    <Spacing />
  </Article>
</div>
