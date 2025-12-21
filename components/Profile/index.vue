<script setup lang="ts">
const { set, locale, languages } = useLang();
</script>

<template>
  <div
    class="pt-10 pb-16 sticky top-0 lg:flex flex-col justify-between h-screen hidden h-full"
  >
    <div class="flex flex-col gap-5 overflow-y-auto scrollbar-thin pr-2">
      <ProfileInfo />

      <ProfileSocials />

      <ProfileLanguages />

      <ProfileTechnologies />
    </div>

    <div class="flex flex-col items-center gap-4 p-4 lg:pb-0 pb-24">
      <Mode />

      <client-only>
        <Select
          v-model="locale"
          :items="languages"
          itemLabel="name"
          itemValue="code"
          itemIcon="icon"
        />
        <template #fallback>
          <div class="relative w-full">
            <div class="flex items-center justify-between rounded border dark:border-white border-gray-500 rounded-xl py-2 px-4 cursor-pointer">
              <span>English</span>
              <div class="flex items-center gap-2">
                <Icon name="twemoji:flag-united-states" />
                <Icon name="mdi:chevron-up" />
              </div>
            </div>
          </div>
        </template>
      </client-only>
    </div>
  </div>
</template>
