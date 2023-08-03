<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const about = ref(null);

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  about,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "about");
  }
);
</script>

<template>
  <section
    ref="about"
    id="about"
    data-section="about"
    class="py-2 flex flex-col gap-[22px] leading-[26px] dark:text-gray-400 text-gray-600 lg:pb-32 pb-6"
  >
    <p>
      I am a highly skilled
      <span class="highlight">Full Stack Developer</span> proficient in a wide
      array of cutting-edge technologies. With a focus on
      <span class="highlight">frontend development</span>, I excel in building
      responsive and dynamic web applications using
      <span class="highlight">Vue.js</span>,
      <span class="highlight">Nuxt.js</span>,
      <span class="highlight">TailwindCSS</span>,
      <span class="highlight"> Primevue</span>. My backend expertise lies in
      <span class="highlight">Node.js</span> and
      <span class="highlight">Nest.js</span>, allowing me to develop scalable
      and efficient server-side applications, complemented by a strong
      proficiency in database management.
    </p>
    <p>
      Additionally,
      <span class="highlight"
        >I am well-versed in configuring servers and deploying web
        applications</span
      >
      using cloud based solutions and technologies like
      <span class="highlight">NGINX</span> and
      <span class="highlight">pm2</span>. My repertoire extends beyond the web
      realm, as I am also adept in crafting
      <span class="highlight">native mobile applications</span> using
      <span class="highlight">React Native</span> and an uncommon framework
      called <span class="highlight">DivKit</span>.
    </p>
    <p>
      With a passion for tackling diverse projects and a constant drive to stay
      updated with the latest trends, I possess the versatility and adaptability
      necessary to
      <span class="highlight">create exceptional digital solutions</span>. My
      portfolio reflects a series of successful projects that showcase my
      expertise in both <span class="highlight">web</span> and
      <span class="highlight">mobile development</span>, demonstrating my
      commitment to delivering high-quality work on every front.
    </p>
  </section>
</template>
