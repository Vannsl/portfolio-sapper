<script>
  import Header from "../components/Header.svelte";
</script>

<style>
  .circular-image {
    margin: 48px auto;
    border-radius: 150px;
    max-width: 300px;
    width: 100%;
    height: 300px;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
  }
</style>

<svelte:head>
  <title>Vannsl About</title>
</svelte:head>

<Header title="about me" />

<article class="my-10 px-4">
  <div class="circular-image" style="background-image:url('vannsl.jpg')"></div>

  <p class="container sm:w-6/12 mx-auto text-secondary">
    Hi, nice to meet you!<br /><br />My name is Vanessa. I am a Web
    Developer.<br /><br />
    Currently, I am a Senior Product Engineer at SinnerSchrader. Since 2019 I am
    the Vue Vixens Munich City Coordinator, helping women with their first
    coding and speaking experiences. I am a member of the JS Kongress Program
    Committee 2020.<br /><br />I created my first website at the age of ten.
    Thanks, parents, for growing up in a village without any other children to
    play with but having a computer with DOS/Win95 and internet access. I have
    been passionate about web development ever since. I studied Media
    Informatics with a focus on Human-Computer-Interaction. Now I am striving to
    provide customers with the best experience possible while creating modern
    and accessible web applications.<br /><br />When I write code, I do it not
    for myself but for the next developer.
  </p>
</article>
