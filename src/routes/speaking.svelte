<script>
  import Article from "../components/Article.svelte";
  import Header from "../components/Header.svelte";
  import HeadlineTertiary from "../components/HeadlineTertiary.svelte";
  import SmallHero from "../components/SmallHero.svelte";
  import List from "../components/List.svelte";
  import ListItem from "../components/ListItem.svelte";
  import SimpleListItem from "../components/SimpleListItem.svelte";
  import OutgoingLink from "../components/OutgoingLink.svelte";
  import Spacing from "../components/Spacing.svelte";

  export let speakingUpcoming = [
    {
      title: "Microfrontends: The Good, The Bad and The Ugly",
      location: "Munich",
      date: "22/01/2020",
      emoji: "germany"
    },
    {
      title: "Microfrontends: The Good, The Bad and The Ugly",
      location: "Prague",
      date: "28/01/2020",
      emoji: "czech-republic"
    },
    {
      title: "Microfrontends: The Good, The Bad and The Ugly",
      location: "Frankfurt",
      date: "25/02/2020",
      emoji: "germany"
    },
    {
      title: "Testing Techniques for Component Driven Development",
      event: "Think About!",
      eventSrc: "https://think-about.io/events/2020/talks/component_driven_development.html",
      location: "Cologne",
      date: "04/06/2020",
      emoji: "germany"
    }
  ]

  export let speakingPast = [
    {
      title: "Microfrontends: The Good, The Bad and The Ugly",
      event: "HHjs",
      eventSrc: "https://www.meetup.com/de-DE/hamburg-js/events/266723104/",
      location: "Hamburg",
      date: "11/12/2019",
      emoji: "germany"
    },
    {
      title: "Accidentally JAM Stack",
      event: "ScriptConf",
      eventSrc: "https://scriptconf.org/#jam",
      location: "Linz",
      videoSrc: "https://www.youtube.com/watch?v=G20P46_4L4A",
      date: "24/10/2019",
      emoji: "austria"
    },
    {
      title: "Why I decided to speak at Conferences",
      event: "Developer Relations",
      eventSrc: "https://www.meetup.com/de-DE/Dev-Rel-Munich/events/264890582/",
      location: "Munich",
      slidesSrc: "https://slides.com/vannsl/public-speaking#/",
      date: "20/09/2019",
      emoji: "germany"
    },
    {
      title: "Adventure Time: Let's build a website in 2019",
      event: "FrankenJS",
      eventSrc: "https://www.meetup.com/de-DE/FrankenJS/events/263000814/",
      location: "Nuremberg",
      slidesSrc: "https://slides.com/vannsl/adventure-time-franken-js#/",
      date: "29/07/2019",
      emoji: "germany"
    },
    {
      title: "Server-Side Rendering using Nuxt.js",
      event: "workerConf",
      eventSrc: "https://worker.sh/index#schedule",
      location: "Dornbirn",
      slidesSrc: "https://slides.com/vannsl/workerconf-nuxt#/",
      date: "28/06/2019",
      emoji: "austria"
    },
    {
      title: "Vue.js: Entstehung, Einsatzgebiete und Zukunftsprognosen",
      event: "enterJS",
      eventSrc: "https://enterjs.de/2019/single?id=8374&vue.js%3A-entstehung%2C-einsatzgebiete-und-zukunftsprognosen",
      location: "Darmstadt",
      date: "26/06/2019",
      emoji: "germany"
    },
    {
      title: "From Legacy to Vue.js",
      event: "iJS International JavaScript Conference",
      eventSrc: "https://javascript-conference.com/vue-js/from-legacy-to-vue-js/",
      location: "London",
      date: "14/05/2019",
      emoji: "united-kingdom"
    },
    {
      title: "Lightning: Nuxt.js <3 TailwindCSS",
      event: "FrontConf",
      eventSrc: "https://frontconf.com/",
      location: "Munich",
      date: "27/04/2019",
      emoji: "germany"
    },
    {
      title: "The VUE(.js)ture is here – endlich erweiter- und wartbare Webapplikationen?",
      event: "JavaScript Days",
      eventSrc: "https://javascript-days.de/javascript/the-vue-jsture-is-here-endlich-erweiter-und-wartbare-webapplikationen/",
      location: "Munich",
      date: "20/03/2019",
      emoji: "germany"
    },
    {
      title: "How to build a static website in two and a half days with Nuxt and TailwindCSS",
      event: "TechDevision Tech Talk",
      eventSrc: "https://www.techdivision.com/unternehmen/veranstaltungen.html",
      location: "Munich",
      date: "21/02/2019",
      emoji: "germany"
    },
    {
      title: "New website in two and a half days",
      event: "Code is Colorful",
      eventSrc: "https://www.meetup.com/de-DE/sinnerschrader-hamburg/events/256937241/",
      location: "Hamburg",
      date: "07/02/2019",
      emoji: "germany"
    },
    {
      title: "How to build a static website in two and a half days with Nuxt and TailwindCSS",
      event: "Frontend Developers",
      eventSrc: "https://www.meetup.com/de-DE/Munich-Frontend-Developers/events/256146257/",
      location: "Munich",
      date: "22/11/2018",
      codebases: [{
        src: "https://github.com/Vannsl/ausbaufaehig-podcast"
      }],
      emoji: "germany"
    },
    {
      title: "Vue Single File Components and Composing",
      event: "TechDevision Tech Talk",
      eventSrc: "https://www.meetup.com/de-DE/TechDivision-TechTalk-Munchen/events/254404298/",
      location: "Munich",
      date: "20/09/2018",
      emoji: "germany"
    },
    {
      title: "Vue.js Component Tools",
      event: "Vue.js",
      eventSrc: "https://www.meetup.com/de-DE/Vue-js-Munich/events/253336909/",
      location: "Munich",
      date: "08/08/2018",
      slidesSrc: "https://de.slideshare.net/VanessaBhner/vuejs-component-tools",
      codebases: [{
        src: "https://github.com/Vannsl/Vue-Composing-Components"
      }],
      emoji: "germany"
    },
    {
      title: "Pain Free Frontend Development",
      event: "PyConWeb",
      eventSrc: "https://2018.pyconweb.com/talks/30-06-2018/vuejs-talk",
      location: "Munich",
      date: "30/06/2018",
      slidesSrc: "https://de.slideshare.net/VanessaBhner/spa-flask-vue",
      codebases: [{
        src: "https://github.com/Vannsl/spa-flask-vue"
      }],
      emoji: "germany"
    },
    {
      title: "State Transitions with Vue.js",
      event: "myposter Tech 'n' Drinks",
      eventSrc: "https://team.myposter.de/beer-bbq-vue-js-beim-tech-n-drinks-myposter/",
      location: "Munich",
      date: "12/06/2018 I",
      slidesSrc: "https://www.slideshare.net/myposter_techtalks/vue-state-transitions",
      codebases: [
        {
          src: "https://github.com/Vannsl/Vue-Transitions-Animations"
        },
        {
          src: "https://github.com/Vannsl/vue-router-transitions"
        }
      ],
      emoji: "germany"
    },
    {
      title: "Composing Components",
      event: "myposter Tech 'n' Drinks",
      eventSrc: "https://team.myposter.de/beer-bbq-vue-js-beim-tech-n-drinks-myposter/",
      location: "Munich",
      date: "12/06/2018 II",
      slidesSrc: "https://www.slideshare.net/myposter_techtalks/vue-composing-components",
      codebases: [{
        src: "https://github.com/Vannsl/Vue-Composing-Components"
      }],
      emoji: "germany"
    },
  ]

export let podcasts = [
  {
    title: "Frontend Testing",
    src: "https://workingdraft.de/375/",
    publisher: "Working Draft",
    episode: "Revision 375",
    date: "11/02/2019",
    emoji: "podcast"
  },
  {
    title: "Vue.js - Der Deep Dive",
    src: "https://workingdraft.de/367/",
    publisher: "Working Draft",
    episode: "Revision 367",
    date: "29/11/2018",
    emoji: "podcast"
  }
]

export let interviews = [
  {
    title: "Vue.js: Nicht nur für neue Projekte eine gute Wahl | Vanessa Böhner im Interview | JS Days 2019",
    src: "https://www.youtube.com/watch?v=-tm2o4NHme4",
    publisher: "EntwickerAkadamie",
    date: "12/06/2019",
    emoji: "videointerviews"
  }
]

export let mentoring = [
  {
    title: "Vue Vixens Full Day Workshop",
    event: "ScriptConf",
    eventSrc: "https://scriptconf.org/#workshops",
    location: "Linz",
    date: "24/10/2019",
    emoji: "mentoring"
  },
  {
    title: "Introduction to Nuxt.js",
    event: "workerConf",
    eventSrc: "https://scriptconf.org/#workshops",
    location: "Bregenz",
    date: "27/06/2019",
    slidesSrc: "https://slides.com/vannsl/nuxtjs-harry-potter#/",
    emoji: "mentoring"
  },
  {
    title: "JSDay - half a day full of JavaScript",
    event: "JSKongress Pre-Event @ SinnerSchrader",
    eventSrc: "https://www.meetup.com/de-DE/SinnerSchrader-Munich-Events/events/257780477/",
    location: "Munich",
    date: "10/03/2019",
    emoji: "mentoring"
  },
  {
    title: "ngGirls Full Day Workshop",
    location: "Munich",
    date: "24/11/2018",
    emoji: "mentoring"
  }
]
</script>

<svelte:head>
  <title>Vannsl | Speaking</title>
</svelte:head>

<SmallHero segment="speaking" type="contain" />
<Header title="talks" />
<Spacing></Spacing>
<Article>
  <HeadlineTertiary>upcoming</HeadlineTertiary>
  <List>
    {#each speakingUpcoming as item (item.date)}
      <ListItem {item} />
    {/each}
  </List>
  <HeadlineTertiary>past</HeadlineTertiary>
  <List>
    {#each speakingPast as item (item.date)}
      <ListItem {item} />
    {/each}
  </List>
</Article>
<Spacing></Spacing>
<Header title="podcasts & interviews" />
<Spacing></Spacing>
<Article>
  <HeadlineTertiary>podcasts</HeadlineTertiary>
  <List>
    {#each podcasts as item (item.date)}
      <SimpleListItem {item} />
    {/each}
  </List>
</Article>
<Article>
  <HeadlineTertiary>interviews</HeadlineTertiary>
  <List>
    {#each interviews as item (item.date)}
      <SimpleListItem {item} />
    {/each}
  </List>
</Article>
<Spacing></Spacing>
<Header title="mentoring & workshops" />
<Spacing></Spacing>
<Article>
  <List>
    {#each mentoring as item (item.date)}
      <ListItem {item} />
    {/each}
  </List>
</Article>

<Spacing></Spacing>
<Spacing></Spacing>
