<script setup lang="ts"></script>

<template>
  <div class="container max-w-[1050px] tracking-normal">
    <div
      class="grid lg:grid-cols-[1fr_1.5fr] lg:gap-[100px] items-start relative"
    >
      <Profile key="profile" v-motion-fade-visible />

      <!--      <div class="flex flex-col gap-[10px] md:py-10 py-6">-->
      <!--        <ProfileInfo class="lg:hidden block md:py-10 py-4" />-->

      <!--        <About v-motion-fade-visible />-->

      <!--        <ExperienceList />-->

      <!--        <ProjectList />-->

      <!--        <Footer class="mt-20 mb-6" v-motion-fade-visible />-->
      <!--      </div>-->
    </div>
  </div>
</template>
