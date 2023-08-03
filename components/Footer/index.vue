<script setup lang="ts"></script>

<template>
  <p class="text-sm md:py-15 py-10 dark:text-gray-400 text-gray-800">
    Loosely designed in
    <nuxt-link
      :class="linkClass"
      to="https://www.figma.com/file/JVao8xifM43EBjJNKlGqmu/selimdev?type=design&node-id=8-329&mode=design&t=4f8ky0RuPKUo1F3Z-0"
      target="_blank"
    >
      Figma
    </nuxt-link>
    and coded in
    <nuxt-link
      class="highlight !cursor-pointer"
      to="https://www.jetbrains.com/webstorm/"
      target="_blank"
      >WebStorm</nuxt-link
    >
    by yours truly. Built with
    <nuxt-link
      class="highlight !cursor-pointer"
      to="https://nuxt.com/"
      target="_blank"
      >Nuxt.js</nuxt-link
    >
    and
    <nuxt-link
      class="highlight !cursor-pointer"
      to="tailwindcss.com/"
      target="_blank"
      >Tailwind CSS</nuxt-link
    >, deployed with
    <nuxt-link
      class="highlight !cursor-pointer"
      to="vercel.com/"
      target="_blank"
      >Vercel</nuxt-link
    >. All text is set in the
    <nuxt-link
      class="highlight !cursor-pointer"
      to="https://fonts.google.com/specimen/Inter"
      target="_blank"
      >Inter</nuxt-link
    >
    typeface.
  </p>
</template>
