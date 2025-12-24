<template>
  <div class="container max-w-[1050px] tracking-normal">
    <div
      class="grid lg:grid-cols-[1fr_1.5fr] lg:gap-[100px] items-start relative"
    >
      <Profile key="profile" />

      <div
        class="flex flex-col gap-[10px] md:py-10 py-6 justify-between h-full"
      >
        <ProfileInfo class="lg:hidden block md:py-10 py-4" />

        <About />

        <ExperienceList />

        <EducationList />

        <ProjectList />

        <!-- <client-only>
          <div class="lg:-my-30">
            <Vue3Lottie animation-link="/lottie.json" />
          </div>
          <template #fallback>
            <div class="lg:-my-20 h-[300px] flex items-center justify-center">
              <div class="w-48 h-48 rounded-full bg-sky-100 dark:bg-slate-800 animate-pulse"></div>
            </div>
          </template>
        </client-only> -->

        <Footer class="mt-20 mb-6" />
      </div>
    </div>
  </div>
</template>
