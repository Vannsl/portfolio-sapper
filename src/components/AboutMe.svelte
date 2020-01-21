<script>
  import Article from "./Article.svelte";
  import Spacing from "./Spacing.svelte";
  import Header from "./Header.svelte";
  import OutgoingLink from "./OutgoingLink.svelte";
</script>

<Header title="about me" />
<div>
  <Article background="sm:bg-white">
    <div class="sm:my-10 my-5 mx-auto border rounded-full w-full max-w-300-px h-300-px bg-center bg-cover shadow-md" style="background-image: url('vannsl.jpg')"></div>

    <p class="md:px-4 text-tertiary">
      Hi, nice to meet you!<br /><br />My name is Vanessa. I am a Web
      Developer.<br /><br />
      Currently, I am a Senior Product Engineer at SinnerSchrader. Since 2019 I am
      the Vue Vixens Munich City Coordinator, helping women with their first
      coding and speaking experiences. I am a member of the JS Kongress Program
      Committee 2020.<br /><br />I created my first website at the age of ten. I have
      been passionate about web development ever since. I studied Media
      Informatics with a focus on Human-Computer-Interaction. Now I am striving to
      provide customers with the best experience possible while creating modern
      and accessible web applications. When I write code, I do it not
      for myself but for the next developer. <br><br>
      Feel free to send me a message on <OutgoingLink href="https://twitter.com/vannsl">Twitter</OutgoingLink>.
    </p>
    <Spacing></Spacing>
    <Spacing></Spacing>
  </Article>
</div>
