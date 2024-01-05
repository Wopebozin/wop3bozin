<template>
  <div>
    <input
      v-model="recipientEmail"
      type="email"
      name="email"
      id="email"
      placeholder="✉️   youremail@gmail.com"
      class="bg-white rounded-[60px] w-full py-[15px] px-[10px] flex justify-center items-center text-black"
    />
    <button
      class="rounded-[60px] flex justify-center items-center gap-3 py-[10px] px-[15px] bg-black text-white relative float-right -top-[49px] right-1.5"
      @click="sendEmail"
    >
      Join Waitlist
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipientEmail: "", // Initial empty string for the recipient's email
    };
  },
  methods: {
    async sendEmail() {
      // Added async since we're performing an asynchronous operation
      if (this.recipientEmail) {
        // Check if recipientEmail has been entered
        try {
          await this.$mail.send({
            to: this.recipientEmail, // Use the email provided by the user
            from: "Wopebozin Support <no-reply@wopebozin.com>", // It's good practice to include the sender's email address
            subject: "Incredible2",
            text: "This is an incredible test message",
          });
          console.log("Email sent successfully!");
          console.log(this.recipientEmail);
        } catch (error) {
          console.error("Failed to send email:", error);
        }
      } else {
        alert("Please enter a valid email address."); // Simple validation feedback
      }
    },
  },
};
</script>
