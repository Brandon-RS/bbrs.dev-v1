<template>
  <div class="contact-container">
    <h2 class="second-title">Talk to me!</h2>
    <p>If you are interested in creating technological products and need help, text me:</p>
    <span>Send a Message</span>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.contact-container {
  margin-top: 50px;

  p {
    margin-top: 20px;
    font-size: 18px;
  }

  span {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 50px;
    background-color: #252525;
    color: #5eddac;
    border-radius: 22px;
    box-shadow: 0 0 0 1px #3d3d3d;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 1px #5eddac;
    }
  }

}

@media screen and (max-width: 500px) {
  .contact-container {
    span {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
