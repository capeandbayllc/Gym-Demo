<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17.967"
    height="16.201"
    viewBox="0 0 17.967 16.201"
  >
    <g
      id="Group_2747"
      data-name="Group 2747"
      transform="translate(-327.645 -1062.869)"
    >
      <path
        id="comm"
        d="M16.321,22.884h3.122a.326.326,0,0,1,.23.1l2.358,2.357V23.21a.326.326,0,0,1,.326-.326h.924a1.335,1.335,0,0,0,1.333-1.333V17.472a1.335,1.335,0,0,0-1.333-1.333H21.213v3.383a1.988,1.988,0,0,1-1.985,1.985H16.241l-.919.919a1.339,1.339,0,0,0,1,.458Z"
        transform="translate(320.996 1053.732)"
        fill="currentColor"
      />
      <path
        id="comm-2"
        data-name="comm"
        d="M5.463,17.278a1.406,1.406,0,0,0,1.4,1.4h.973a.343.343,0,0,1,.343.343v2.241L9.4,20.047l1.264-1.264a.343.343,0,0,1,.243-.1H14.2a1.406,1.406,0,0,0,1.4-1.4v-4.3a1.406,1.406,0,0,0-1.4-1.4H6.869a1.406,1.406,0,0,0-1.4,1.4Z"
        transform="translate(325.785 1055.814)"
        fill="currentColor"
        opacity="0.423"
      />
      <g
        id="Group_2746"
        data-name="Group 2746"
        transform="translate(327.645 1062.869)"
        v-if="count"
      >
        <ellipse
          id="Ellipse_660"
          data-name="Ellipse 660"
          cx="3.995"
          cy="3.995"
          rx="3.995"
          ry="3.995"
          transform="translate(0 0)"
          fill="hsl(var(--er))"
        />
        <text
          id="_2"
          data-name="2"
          transform="translate(2.492 5.601)"
          fill="currentColor"
          font-size="5"
          font-family="Muli-SemiBold, Muli"
          font-weight="600"
        >
          <tspan x="0" y="0">{{ count }}</tspan>
        </text>
      </g>
    </g>
  </svg>
</template>
<script setup>
const props = defineProps({
  count: Number,
});
</script>
