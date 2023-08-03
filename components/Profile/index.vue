<template>
  <div
    class="py-10 sticky top-0 md:flex flex-col justify-between h-screen overflow-hidden hidden h-full"
  >
    <div class="flex flex-col gap-[44px]">
      <ProfileInfo />

      <ProfileNav />
    </div>

    <div class="flex flex-col gap-4 p-4">
      <ProfileSocials />

      <Mode />
    </div>
  </div>
</template>
