<script setup lang="ts">
export interface SelectProps {
  modelValue: any;
  items: any[];
  itemLabel: string;
  itemValue: string;
  itemIcon: string;
}

import { TransitionFade } from "@morev/vue-transitions";

import { onClickOutside } from "@vueuse/core";

const wrapper = ref(null);
const active = ref<boolean>(false);

const closeItems = (): void => {
  active.value = false;
};

const toggleItems = (): void => {
  active.value = !active.value;
};

onMounted(() => {
  if (wrapper.value) {
    onClickOutside(wrapper, () => {
      closeItems();
    });
  }
});

const props = defineProps<SelectProps>();
const emit = defineEmits(["update:modelValue"]);

const setActiveItem = (item: any): void => {
  emit("update:modelValue", item[props.itemValue]);

  closeItems();
};

onMounted(() => {
  if (!props.modelValue && props.items?.length) {
    setActiveItem(props.items[0]);
  }
});

const activeItem = computed<any>(() => {
  return props.items?.find((e) => e[props.itemValue] === props.modelValue);
});
</script>

<template>
  <div ref="wrapper" class="relative w-full">
    <div
      v-if="activeItem"
      class="flex items-center justify-between rounded border dark:border-white border-gray-500 rounded-xl py-2 px-4 cursor-pointer"
      @click="toggleItems"
    >
      <span>{{ activeItem?.[props.itemLabel] }}</span>

      <div class="flex items-center gap-2">
        <Icon :name="activeItem?.[props.itemIcon]" />

        <Icon :name="active ? 'mdi:chevron-down' : 'mdi:chevron-up'" />
      </div>
    </div>

    <transition-fade>
      <div
        v-if="active"
        class="flex flex-col dark:bg-slate-800 bg-sky-100 rounded-xl absolute bottom-[calc(100%+10px)] w-full overflow-hidden shadow-sm"
      >
        <div
          v-for="(item, index) in props.items"
          :key="`select-${index}`"
          @click="setActiveItem(item)"
          class="py-2 px-4 cursor-pointer dark:hover:bg-slate-700 hover:bg-sky-200 flex items-center justify-between"
        >
          <span>{{ item[props.itemLabel] }}</span>

          <Icon :name="item[props.itemIcon]" />
        </div>
      </div>
    </transition-fade>
  </div>
</template>
