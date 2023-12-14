<template>
  <section class="flex justify-center mb-20">
    <section class="max-w-[1440px] overflow-hidden flex flex-col">
      <p
        class="font-[PeckhamPressTrial] text-[#FAFAFA] text-[100px] lg:text-[205px] leading-none -translate-x-20 lg:-translate-x-40"
      >
        WORKS
      </p>
      <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
        <div class="p-3"><FanStep /></div>
        <div><img src="../assets/Fan1.png" alt="" class="" /></div>
      </div>
    </section>
  </section>
</template>

<style scoped>
section section {
  background: url(../assets/FanVector.png);
  background-repeat: no-repeat;
  background-size: auto;
}

@media (min-width: 700px) {
  .footer {
    background-position: left;
    background-size: cover;
  }
}

@media (min-width: 1440px) {
  .footer {
    background-size: cover;
    background-position: auto;
  }
}
</style>
