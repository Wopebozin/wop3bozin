<template>
  <section
    class="hero min-h-screen px-3 md:p-0 flex flex-col items-center text-white"
  >
    <Header class="md:w-3/4 xl:w-1/2 mt-5 mb-[6rem]" />
    <div
      class="rounded-[60px] bg-[#FFFFFF36] self-start md:self-auto py-[10px] px-[15px] mb-5"
    >
      <p>Introducing Wopebozin 🎉</p>
    </div>
    <div class="mb-5">
      <h1 class="md:text-center max-w-[990px]">
        Where Fans and Creators
        <span class="font-[Tracking]"> Unite!</span>
      </h1>
    </div>
    <div class="text-left md:text-center text-lg mb-10">
      <p class="max-w-[572px]">
        Are you a fan of amazing content creators? Do you wish you could get
        closer to the creators you admire most? Look no further! Wopeboozin is
        here to revolutionize your fan experience.
      </p>
    </div>
    <WaitlistJoin class="w-[98%] md:w-[484px] self-start md:self-auto" />
    <div class="flex gap-3 items-center">
      <AvatarsPile />
      <p>Join the waitlist of 200+</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(82.18deg, #ff3461 24.04%, #fd7965 56.97%),
    linear-gradient(179.79deg, rgba(255, 255, 255, 0) 74.49%, #ffffff 89.19%);
}
</style>
