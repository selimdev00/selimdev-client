<template>
  <div
    class="md:flex flex-col justify-between lg:sticky top-0 max-h-screen overflow-hidden hidden h-full"
  >
    <div class="fixed h-full py-10 flex flex-col justify-between">
      <div class="flex flex-col gap-[44px]">
        <ProfileInfo />

        <ProfileNav />
      </div>

      <div class="flex flex-col gap-4 p-4">
        <ProfileSocials />

        <Mode />
      </div>
    </div>
  </div>
</template>
