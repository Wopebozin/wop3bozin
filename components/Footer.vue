<template>
  <section class="footer flex justify-center rounded-t-3xl">
    <section
      class="flex flex-col items-center text-white pt-20 px-5 lg:px-20 lg:pt-20 min-h-[30vh] gap-5 pb-3"
    >
      <div class="xl:mb-[5vh]">
        <h1 class="xl:text-[180px] lg:text-[140px]">Wopebozin</h1>
      </div>
      <div
        class="flex flex-col-reverse md:flex-row justify-between w-full mb-20 gap-5"
      >
        <div class="flex md:gap-3">
          <div class="flex-col self-end">
            <p>Coming Soon to</p>
            <div class="flex gap-5 mt-2">
              <img src="../assets/PlayStore.png" alt="" />
              <img src="../assets/AppleStore.png" alt="" />
            </div>
          </div>
          <img
            src="../assets/FooterArrow.svg"
            alt=""
            class="md:relative md:top-8"
          />
        </div>
        <div class="flex flex-col gap-5">
          <img src="../assets/FooterLine.svg" alt="" />
          <div class="flex gap-[15vw] lg:gap-[4vw]">
            <div>
              <ul class="flex flex-col gap-4">
                <li class="font-bold">Links</li>
                <li>About</li>
                <li>How it works</li>
                <li>FAQs</li>
                <a href="../static/Terms.pdf" target="_blank"><li>Terms and Conditions</li></a>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <ul class="flex flex-col gap-4">
                <li class="font-bold">Social</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-3 justify-between w-full">
        <p>©2023 Wopebozin. All right reserved</p>
        <p>Made with LOVE</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
.footer {
  background: url(../assets/FooterVector.png),
    linear-gradient(92.04deg, #ff3461 14.07%, #fd7965 99.74%);
  background-repeat: no-repeat;
  background-position: top;
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
