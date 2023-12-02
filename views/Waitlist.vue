<template>
  <section class="mb-[6vh] flex justify-center items-center text-white px-4">
    <div
      class="card bg-[#8979E8] rounded-[30px] flex flex-col-reverse md:flex-row md:items-center xl:min-w-[1240px] gap-6 md:gap-[5vw] md:justify-center px-5 pt-20 md:pt-0 md:max-h-[392px] lg:max-h-[492px]"
    >
      <div>
        <img
          src="../assets/Phone.png"
          alt=""
          class="md:h-[450px] lg:h-[588.36px] md:relative md:bottom-[28px] lg:bottom-[47px]"
        />
      </div>
      <div class="flex flex-col gap-8 md:gap-8 lg:gap-[5vh]">
        <div class="rounded-[60px] bg-[#FFFFFF36] py-[10px] px-[15px] w-max">
          <p>Coming Soon!!! 🎉</p>
        </div>
        <h1 class="text-[56px] md:leading-8 lg:leading-3">Stay In the Loop</h1>
        <p class="max-w-[484px]">
          By joining waitlist, you'll be the first to know about all the
          exciting features and updates that Wopeboozin has in store for you.
        </p>
        <WaitlistJoin class="max-h-[8vh] md:max-h-[6vh]" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-image: url(../assets/WaitlistVector.png);
  background-position: right;
}
@media (max-width: 767px) {
  .card {
    background-position: top;
  }
}
</style>
