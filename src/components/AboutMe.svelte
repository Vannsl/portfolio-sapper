<script>
  import Article from "./Article.svelte";
  import Spacing from "./Spacing.svelte";
  import Header from "./Header.svelte";
  import OutgoingLink from "./OutgoingLink.svelte";
</script>

<Header title="about me" />
<div>
  <Article background="sm:bg-white dark:bg-dark">
    <div class="sm:my-10 my-5 mx-auto border dark:border-dark rounded-full w-full max-w-300-px h-300-px bg-center bg-cover shadow-md" style="background-image: url('vannsl.jpg')"></div>

    <p class="md:px-4 text-tertiary dark:text-tertiary-light">
      Hi, nice to meet you!<br /><br />My name is Vanessa. I am a Web
      Developer. My nickname is Vannsl since I lost various passwords for Vanny in 1998.<br /><br />
      I'm a <OutgoingLink href="https://www.vuevixens.org/">Frontend Foxes</OutgoingLink> Chapter Leader,
      helping others with their first coding and speaking experiences while
      learning from them, too. In 2020 I started the Frontend Testing Podcast
      <OutgoingLink href="https://www.expect-exception.fail">expect(Exception)</OutgoingLink>.
      Also in 2020, I was a member of the JS Kongress Program Committee. I work as a Software Developer at
      <OutgoingLink href="https://www.zage.life/?utm_source=vannsl&amp;utm_medium=referral&amp;utm_campaign=website&amp;utm_content=frontend">ZAGE</OutgoingLink>.
      From 2010-2015 I studied Media Informatics with a focus on Human-Computer-Interaction. Now I am striving to
      provide customers with the best experience possible while creating modern
      and accessible web applications. When I write code, I don't do it for myself but for the next developer.
      In my spare time, I like to do some sports and drink (for scientific purposes) wine on my Wine Podcast 
      <OutgoingLink href="https://www.ausbaufaehig-podcast.de/">Ausbaufähig</OutgoingLink>.<br><br>
      Feel free to send me a message on <OutgoingLink href="https://twitter.com/vannsl">Twitter</OutgoingLink>.
    </p>
    <Spacing></Spacing>
    <Spacing></Spacing>
  </Article>
</div>
