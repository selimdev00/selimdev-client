<script setup lang="ts">
import type { Experience } from "~/composables/useExperiences";

interface ExperienceItemProps {
  item: Experience;
}

const props = defineProps<ExperienceItemProps>();
</script>

<template>
  <div
    class="flex sm:flex-row flex-col items-start sm:gap-[20px] gap-1 relative cursor-default md:p-6 p-3 dark:hover:bg-slate-900 hover:bg-sky-100 rounded-lg hover:!opacity-100 group-hover/list:opacity-50 transition-all duration-300"
  >
    <div class="h-[103%] absolute top-7 left-[-40px] gap-3 md:block hidden">
      <div
        class="w-[20px] h-[20px] aspect-1/1 rotate-45 border border-sky-400 rounded-[3px] group-hover/item:rotate-90 transition-all duration-300"
      ></div>

      <div
        class="h-full dark:bg-white bg-gray-700 w-[1px] mt-4 mx-auto group-last/item:hidden rounded-full"
      ></div>
    </div>


    <div class="w-full flex flex-col gap-2">
      <div
          class="pt-[6px] flex md:flex-row sm:flex-col flex-row items-center gap-[10px] text-[12px] uppercase text-center"
      >
        <p>
          {{
            $DateTime
                .fromISO(props.item.from)
                .setLocale($i18n.locale)
                .toFormat("LLL yyyy")
          }}
        </p>

        <div
            class="md:block hidden h-[1px] w-[20px] dark:bg-white bg-gray-700"
        ></div>

        <div class="md:hidden sm:block hidden">
          <Icon name="mdi:arrow-down" />
        </div>

        <div class="sm:hidden block">
          <Icon name="mdi:arrow-right" />
        </div>

        <p>
          {{
            props.item.to === "now"
                ? $t("now")
                : $DateTime
                    .fromISO(props.item.to)
                    .setLocale($i18n.locale)
                    .toFormat("LLL yyyy")
          }}
        </p>
      </div>


      <div class="flex flex-col">
        <div
          class="flex items-center gap-[8.5px] dark:group-hover/item:text-sky-400 group-hover/item:text-sky-900 transition-colors duration-300 flex-wrap"
        >
          <h2 class="text-[14px] font-semibold">
            {{ $t(props.item.position) }}
          </h2>

          <div
            class="w-[2px] h-[2px] rounded-full dark:bg-white bg-gray-700 group-hover/item:bg-sky-400"
          ></div>

          <h2 class="text-[14px] font-semibold">
            <a
              v-if="props.item.link"
              :href="props.item.link"
              target="_blank"
              rel="noopener"
              class="before:content-[''] before:absolute before:inset-0"
            >
              {{ $t(props.item.place) }}
            </a>
            <template v-else>{{ $t(props.item.place) }}</template>
          </h2>

          <Icon
            v-if="props.item.link"
            name="gridicons:external"
            class="text-[12px]"
          />
        </div>

        <h3
          class="text-[13px] font-semibold dark:text-sky-200 text-sky-800 opacity-75"
        >
          {{ $t(props.item.subtitle) }}
        </h3>
      </div>

      <p class="md:text-[14px] text-[15px] dark:text-gray-400 text-gray-500 leading-[1.6]">
        {{ $t(props.item.description) }}
      </p>

      <div class="flex flex-wrap gap-2">
        <div
          v-for="(tag, index) in props.item.tags"
          :key="`tag-${index}-${tag}`"
          class="text-sky-400 font-semibold text-[11px] border border-sky-400 rounded-full px-2 py-1"
        >
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
