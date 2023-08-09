<script setup lang="ts">
const generateScriptFile = (): HTMLElement => {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-12PXS2N250";
  script.async = true;
  return script;
};

const generateScriptCode = (): HTMLElement => {
  const script = document.createElement("script");
  script.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag() {
    dataLayer.push(arguments); } gtag("js", new Date()); gtag("config",
    "G-12PXS2N250");`;
  return script;
};

onMounted(() => {
  const wrapper = document.getElementById("google-anal");

  if (!wrapper) return;

  wrapper.append(generateScriptCode());
  wrapper.append(generateScriptFile());
});
</script>

<template>
  <div id="google-anal"></div>
</template>
