<template>
  <div
    class="upload-btn-container"
    :class="{
      'text-primary': active,
      'text-gray-500': !active,
      'upload-complete': !active,
    }"
  >
    <svg
      class="upload-box"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 17"
      version="1.1"
      xml:space="preserve"
      style="
        clip-rule: evenodd;
        fill-rule: evenodd;
        stroke-linejoin: round;
        stroke-miterlimit: 1.41;
      "
    >
      <path
        id="upload-box"
        d="M26 3.82l3.16 1.18 -13.16 4.91 -13.16-4.91 3.16-1.18 0-3.07 -6 2.25 0 8 16 6 16-6 0-8 -6-2.25 0 3.07Z"
        fill="currentColor"
      />
    </svg>

    <svg
      class="upload-arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="32"
      viewBox="0 0 16 16"
      version="1.1"
      xml:space="preserve"
      style="
        clip-rule: evenodd;
        fill-rule: evenodd;
        stroke-linejoin: round;
        stroke-miterlimit: 1.41;
      "
    >
      <path
        id="upload-arrow"
        d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>
<style>
@-webkit-keyframes uploading-arrow {
  0% {
    margin-bottom: -40%;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    margin-bottom: 10%;
  }
}

@keyframes uploading-arrow {
  0% {
    margin-bottom: -40%;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    margin-bottom: 10%;
  }
}
@-webkit-keyframes uploading-arrow-complete {
  from {
    margin-bottom: -30%;
    opacity: 0;
  }
  to {
    margin-bottom: 0;
    opacity: 1;
    fill: #46bb39;
  }
}
@keyframes uploading-arrow-complete {
  from {
    margin-bottom: -30%;
    opacity: 0;
  }
  to {
    margin-bottom: 0;
    opacity: 1;
    fill: #46bb39;
  }
}
.upload-btn-container {
  position: relative;
  overflow: hidden;
  width: 32px;
  height: 32px;
  display: inline-block;
}
.upload-btn-container svg {
  position: absolute;
}
.upload-btn-container svg.upload-box {
  bottom: -7px;
}
.upload-btn-container svg.upload-arrow {
  left: 8px;
  position: absolute;
  opacity: 0;
  bottom: 20%;
  -webkit-animation: uploading-arrow 1.5s ease-out infinite;
  animation: uploading-arrow 1.5s ease-out infinite;
}
.upload-btn-container.upload-complete .upload-arrow {
  -webkit-animation: uploading-arrow-complete 1.5s ease-out 1;
  animation: uploading-arrow-complete 1.5s ease-out 1;
  transition: fill 1.5s ease-out;
}
.upload-btn-container.upload-complete svg {
  opacity: 1;
}
/* .upload-btn-container.upload-complete path {
    fill: #46bb39;
} */
</style>
<script setup>
const props = defineProps({ active: { type: Boolean, default: false } });
</script>
