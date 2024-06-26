<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col">
      <nuxt-img
        width="225"
        height="225"
        src="/avatar.jpg"
        class="rounded-full w-1/2 border-sky-500 dark:border-sky-200 border-4 mb-4 shadow-xl shadow-sky-200 dark:shadow-slate-800"
      />

      <h1
        class="text-[40px] font-bold leading-[1] mb-4 text-gray-700 dark:text-white"
      >
        {{ $t("website.title") }}
      </h1>

      <div class="flex">
        <h2 class="text-[20px] font-semibold leading-[1] text-gray-400">
          {{ $t("website.subtitle") }}
        </h2>
      </div>
    </div>

    <p class="dark:text-sky-200 text-sky-500">
      {{ $t("website.description") }}
    </p>
  </div>
</template>
