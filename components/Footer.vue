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
                <a href="#about"><li>About</li></a>
                <a href="#creators"><li>How it works</li></a>
                <a href="#faqs"> <li>FAQs</li></a>
                <NuxtLink to="/terms"><li>Terms and Conditions</li></NuxtLink>
                <a
                  href="https://drive.google.com/file/d/1bVNe_Fs_ffCqJ6kK2-gzj4RjYPEhUgN5/view?usp=share_link"
                >
                  <li>Privacy Policy</li>
                </a>
              </ul>
            </div>
            <div>
              <ul class="flex flex-col gap-4">
                <li class="font-bold">Social</li>

                <a href="https://facebook.com/wopebozin" target="_blank"
                  ><li>Facebook</li></a
                >
                <a href="https://instagram.com/wopebozin" target="_blank"
                  ><li>Instagram</li></a
                >
                <a href="https://x.com/wopebozin" target="_blank"><li>X</li></a>
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
