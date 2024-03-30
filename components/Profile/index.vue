<script setup lang="ts">
const { set, locale, languages } = useLang();
</script>

<template>
  <div
    class="pt-10 pb-16 sticky top-0 md:flex flex-col justify-between h-screen hidden h-full"
  >
    <div class="flex flex-col gap-[44px]">
      <ProfileInfo />

      <!--      <ProfileNav />-->

      <ProfileSocials />
    </div>

    <div class="flex flex-col items-center gap-4 p-4 lg:pb-0 pb-24">
      <Mode />

      <Select
        v-model="locale"
        :items="languages"
        itemLabel="name"
        itemValue="code"
        itemIcon="icon"
      />
    </div>
  </div>
</template>
