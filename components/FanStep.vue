<template>
  <div class="flex flex-col gap-7">
    <div>
      <div
        class="bg-[#FFEBEF] px-2 w-max rounded-full relative -rotate-12 top-2 lg:top-4"
      >
        <p class="text-[#fd7965]">How it works</p>
      </div>
      <h1>Fan</h1>
    </div>
    <div class="flex gap-3">
      <div class="bg-gray-200 h-[280px] w-2 rounded flex justify-center py-1">
        <div
          :class="{
            'mt-20': steps[1].isOpen,
            'mt-auto': steps[2].isOpen,
          }"
          class="iBar w-1 h-[118px] rounded"
        ></div>
      </div>
      <div class="flex flex-col justify-between">
        <div
          v-for="step in steps"
          :key="step.id"
          class="flex flex-col gap-3 py-2"
        >
          <h2 :class="{ 'text-[#9DA4AE]': !step.isOpen }" class="text-black">
            {{ step.title }}
          </h2>
          <p
            :class="{ hidden: !step.isOpen }"
            class="text-[#64748B] w-[287px] lg:w-[430px]"
          >
            {{ step.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let steps = ref([
  {
    id: 1,
    title: "Signup",
    content:
      "Provide your phone number to create your Wopeboozin account. We'll send you a verification code to ensure it's really you.",
    isOpen: true,
  },
  {
    id: 2,
    title: "Add details",
    content:
      "After verifying your phone number, personalize your profile. Add a profile picture, your username, your display name.",
    isOpen: false,
  },
  {
    id: 3,
    title: "Enjoy creators Content",
    content:
      "You're all set! Now, dive into the world of exclusive content from your favorite creators. Subscribe, engage, and enjoy their premium offerings.",
    isOpen: false,
  },
]);

const cycleSteps = () => {
  const currentOpenIndex = steps.value.findIndex((step) => step.isOpen);

  // Set all steps to closed.
  steps.value.forEach((step, index) => {
    steps.value[index].isOpen = false;
  });

  // Calculate the next step to be opened.
  const nextOpenIndex = (currentOpenIndex + 1) % steps.value.length;

  // Set the next step to be open.
  steps.value[nextOpenIndex].isOpen = true;
};

// Execute the cycleSteps function every 3 seconds.
setInterval(cycleSteps, 6000);
</script>

<style scoped>
.iBar {
  background: linear-gradient(92.04deg, #ff3461 14.07%, #fd7965 99.74%);
}
</style>
