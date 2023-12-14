<template>
  <section
    class="hero min-h-screen flex justify-center mb-20 pb-[120px] md:pb-0"
  >
    <section
      class="px-3 md:p-0 flex flex-col items-center text-white max-w-[1440px]"
    >
      <Header class="md:w-3/4 xl:w-3/4 mt-5 mb-[3rem] md:mb-[6rem]" />
      <img
        src="../assets/WhimsyLine.svg"
        alt=""
        class="w-[70px] md:hidden self-start mb-[2.5rem]"
      />
      <div
        class="rounded-[60px] bg-[#FFFFFF36] self-start md:self-auto py-[10px] px-[15px] mb-5"
      >
        <p>Introducing Wopebozin 🎉</p>
      </div>
      <div class="mb-5 md:mb-0">
        <h1 class="md:text-center max-w-[990px]">
          Where Fans and Creators
          <span class="unite lg:text-[90px]"> Unite!</span>
          <span>
            <img
              src="../assets/WhimsyLine.svg"
              alt=""
              class="hidden md:flex relative md:-top-[18rem] xl:-top-[5.5rem] md:left-4 lg:left-[1rem] xl:-left-[3rem]" />
            <img
              src="../assets/Star.svg"
              alt=""
              class="md:hidden relative float-right w-[35px] top-8"
          /></span>
        </h1>
      </div>
      <div class="text-left md:text-center text-lg mb-10 md:mb-5 md:-mt-20">
        <p class="max-w-[572px]">
          Are you a fan of amazing content creators? Do you wish you could get
          closer to the creators you admire most? Look no further! Wopeboozin is
          here to revolutionize your fan experience.
          <span
            ><img
              src="../assets/Star.svg"
              alt=""
              class="hidden md:flex relative float-right lg:-top-9 md:-top-5 md:-right-[4rem] lg:-right-[7rem] xl:-right-[17rem]"
          /></span>
        </p>
      </div>
      <WaitlistJoin class="w-[98%] md:w-[484px] self-start md:self-auto" />
      <div class="flex gap-3 items-center self-start md:self-auto mb-20">
        <AvatarsPile />
        <p>Join the waitlist of 200+</p>
      </div>
    </section>
  </section>
  <section
    class="grid place-items-center h-max overflow-hidden relative -top-[180px] lg:-top-60 -mb-20 carousel"
  >
    <div class="absolute bottom-0 w-full h-2/4 caro-baby"></div>
    <div class="max-w-[1440px]"><Carousel /></div>
  </section>
</template>

<style scoped>
.hero {
  background: url(../assets/HeroVector.png),
    linear-gradient(82.18deg, #ff3461 24.04%, #fd7965 56.97%),
    linear-gradient(179.79deg, rgba(255, 255, 255, 0) 74.49%, #ffffff 89.19%);
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-position: top;
  background-size: auto;
}

@media (max-width: 1024px) {
  .hero {
    background: url(../assets/HeroVector.png),
      linear-gradient(82.18deg, #ff3461 24.04%, #fd7965 56.97%),
      linear-gradient(179.79deg, rgba(255, 255, 255, 0) 74.49%, #ffffff 89.19%);
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: initial;
    background-size: auto;
  }
}

@media (min-width: 1440px) {
  .hero {
    background: url(../assets/HeroVector.png),
      linear-gradient(82.18deg, #ff3461 24.04%, #fd7965 56.97%),
      linear-gradient(179.79deg, rgba(255, 255, 255, 0) 74.49%, #ffffff 89.19%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: auto;
  }
}

.carousel {
  backdrop-filter: blur(100px);
}

.caro-baby {
  /* background: linear-gradient(82.18deg, #ff3461 24.04%, #fd7965 56.97%); */
}
</style>
