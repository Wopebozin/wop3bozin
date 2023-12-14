<template>
  <section
    class="scroll-container flex gap-10 h-max p-5 overflow-hidden whitespace-nowrap"
  >
    <div class="cards-group flex gap-[40px] whitespace-nowrap">
      <div
        class="card card1 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 -rotate-[6.28deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Comedian
        </div>
      </div>
      <div
        class="card card2 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 rotate-[5.1deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Content Creator
        </div>
      </div>
      <div
        class="card card3 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 -rotate-[6.14deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">Gamer</div>
      </div>
      <div
        class="card card4 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 rotate-[4.61deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Instagram Model
        </div>
      </div>
      <div
        class="card card1 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 -rotate-[6.28deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Comedian
        </div>
      </div>
    </div>
    <div class="cards-group flex gap-[40px] whitespace-nowrap">
      <div
        class="card card1 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 -rotate-[6.28deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Comedian
        </div>
      </div>
      <div
        class="card card2 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 rotate-[5.1deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Content Creator
        </div>
      </div>
      <div
        class="card card3 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 -rotate-[6.14deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">Gamer</div>
      </div>
      <div
        class="card card4 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 rotate-[4.61deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Instagram Model
        </div>
      </div>
      <div
        class="card card1 w-[320px] h-[278px] md:w-[300px] md:h-[348px] rounded-2xl p-4 -rotate-[6.28deg]"
      >
        <div class="rounded-full w-max p-2 text-base bg-[#FFFFFF3B]">
          Comedian
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card1 {
  background: url(../assets/Caro1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.card2 {
  background: url(../assets/Caro2.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.card3 {
  background: url(../assets/Caro3.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.card4 {
  background: url(../assets/Caro4.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.cards-group {
  animation: scroll-left 20s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
