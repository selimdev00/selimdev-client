<template>
  <li class="grid grid-cols-[100px_1fr] items-start gap-6">
    <div class="w-[100px] h-[70px]">
      <img
        class="w-full h-full aspect-1.5/1 object-cover"
        src="https://images.pexels.com/photos/3186961/pexels-photo-3186961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-[7px]">
          <h1 class="text-[12px] font-semibold">Frontend Engineer</h1>

          <Icon name="gridicons:external" class="text-[12px]" />
        </div>

        <p class="text-[12px] text-gray-400">
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including Harvard Business School, Everytown for
          Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
          19th News, and more. Provide leadership within engineering department
        </p>
      </div>

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
