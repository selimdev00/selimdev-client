<script lang="ts" setup>
onMounted(() => {
  const wrapper = document.getElementById("yandex-metrica");

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = `(function (m, e, t, r, i, k, a) { m[i] = m[i] || function () { (m[i].a =
    m[i].a || []).push(arguments); }; m[i].l = 1 * new Date(); for (var j = 0; j
    < document.scripts.length; j++) { if (document.scripts[j].src === r) {
    return; } } (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]),
    (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a); })(window,
    document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(94541339, "init", { clickmap: true, trackLinks: true,
    accurateTrackBounce: true, webvisor: true, }); `;

  if (!wrapper) return;

  wrapper.append(script);
});
</script>

<template>
  <!-- Yandex.Metrika counter -->
  <div id="yandex-metrica"></div>

  <NoScript
    ><div>
      <img
        src="https://mc.yandex.ru/watch/94541339"
        style="position: absolute; left: -9999px"
        alt=""
      /></div
  ></NoScript>
  <!-- /Yandex.Metrika counter -->
</template>
