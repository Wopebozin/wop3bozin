<template>
  <div
    class="bar w-full rounded-[60px] flex justify-between h-[75px] py-[10px] px-[15px] bg-[#FFFFFF24]"
  >
    <div
      class="rounded-[60px] bg-gray-200 w-20 grid place-items-center text-black font-[Tracking] text-3xl"
    >
      <img src="../assets/logo.png" alt="wope" srcset="" />
    </div>
    <div class="flex items-center gap-5">
      <div class="flex items-center">
        <ul class="hidden sm:flex gap-4 text-white">
          <a href="#about"><li>About</li></a>
          <a href="#creators"><li>Creators</li></a>
          <a href="#fans"><li>Fans</li></a>
          <li>Contact</li>
        </ul>
      </div>
      <button
        class="rounded-[60px] flex justify-center items-center gap-3 py-[10px] px-[15px] bg-white"
      >
        🙂
        <p class="text-black">Join Waitlist</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.bar {
  box-shadow: 0px 10px 15px 0px #0f172a0f;
}

ul li {
  @apply cursor-pointer;
}
</style>
