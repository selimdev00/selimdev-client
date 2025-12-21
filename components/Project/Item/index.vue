<script setup lang="ts">
import type { Project } from "~/composables/useProjects";

interface ProjectItemProps {
  item: Project;
}

const props = defineProps<ProjectItemProps>();
</script>

<template>
  <div
    class="flex flex-col gap-6 p-4 cursor-default dark:hover:bg-slate-900 hover:bg-sky-100 rounded-lg hover:!opacity-100 group-hover/list:opacity-50 transition-all duration-300"
  >
    <div class="flex flex-wrap gap-2">
      <ImageViewer
        v-for="(image, index) in props.item.images"
        :key="`image-${index}`"
        :src="image"
        :alt="$t(props.item.name)"
      >
        <div class="w-[100px] h-[70px]">
          <img
            class="w-full h-full aspect-1.5/1 object-cover rounded-lg hover:opacity-80 transition-opacity"
            :src="image"
            :alt="props.item.name"
          />
        </div>
      </ImageViewer>
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-[12px] uppercase dark:text-gray-400 text-gray-500">
        {{
          $DateTime
            .fromISO(props.item.date)
            .setLocale($i18n.locale)
            .toFormat("LLL yyyy")
        }}
      </p>

      <div class="flex flex-col gap-1">
        <div
          class="flex items-center gap-[7px] dark:group-hover/item:text-sky-400 group-hover/item:text-sky-900 transition duration-300"
        >
          <h2 class="text-[14px] font-semibold">{{ $t(props.item.name) }}</h2>
        </div>

        <div
          v-if="props.item?.links?.length"
          class="text-[13px] text-sky-200 flex flex-wrap gap-2"
        >
          <nuxt-link
            v-for="(link, index) in props.item.links"
            :key="`link-${index}`"
            :to="link.url"
            target="_blank"
            class="highlight !cursor-pointer"
          >
            {{ $t(link.name) }}
          </nuxt-link>
        </div>

        <p class="text-[14px] dark:text-gray-400 text-gray-500 leading-[1.6]">
          {{ $t(props.item.description) }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <div
          v-for="(tag, index) in props.item.tags"
          :key="`tag-${index}`"
          class="text-sky-400 font-semibold text-[11px] border border-sky-400 rounded-full px-2 py-1"
        >
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
