<template>
  <li class="px-[2px] flex items-start gap-[20px] relative group">
    <div class="h-[105%] absolute top-1 left-[-40px] gap-3">
      <div
        class="w-[20px] h-[20px] aspect-1/1 rotate-45 border border-primary rounded-[3px]"
      ></div>

      <div class="h-full bg-white w-[1px] mt-4 mx-auto group-last:hidden"></div>
    </div>

    <div
      class="w-[240px] py-[7px] flex items-center gap-[10px] text-[10px] uppercase"
    >
      <p>July 2019</p>

      <div class="h-[1px] w-[24px] bg-white"></div>

      <p>June 2019</p>
    </div>

    <div class="w-full flex flex-col gap-2">
      <div class="flex flex-col">
        <div class="flex items-center gap-[8.5px]">
          <h1 class="text-[12px] font-semibold">Frontend Engineer</h1>

          <div class="w-[2px] h-[2px] rounded-full bg-white"></div>

          <h1 class="text-[12px] font-semibold">IDE-AL Hyzmat</h1>

          <Icon name="gridicons:external" class="text-[12px]" />
        </div>

        <h1 class="text-[12px] font-semibold text-blue-400 opacity-75">
          Frontend Engineer
        </h1>
      </div>

      <p class="text-[12px] text-gray-400 leading-[1.6]">
        Deliver high-quality, robust production code for a diverse array of
        projects for clients including Harvard Business School, Everytown for
        Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
        Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
      </p>

      <div class="flex flex-wrap gap-2">
        <div
          class="text-primary font-semibold text-[10px] border border-primary rounded-full px-2 py-1"
        >
          <span>HTML</span>
        </div>
        <div
          class="text-primary font-semibold text-[10px] border border-primary rounded-full px-2 py-1"
        >
          <span>CSS</span>
        </div>
      </div>
    </div>
  </li>
</template>
