<template>
  <div>
    <template v-if="once">
      <template v-if="intersected > 0">
        <slot />
      </template>

      <slot name="loader" v-if="intersected < 1" />
    </template>

    <template v-else>
      <slot />

      <slot name="loader" />
    </template>

    <div ref="main" />
  </div>
</template>

<script>
export default {
  name: "VueEpicIo",

  props: {
    disconnect: {
      default: false,
      type: Boolean,
    },
    root: {
      default: null,
      type: Object,
    },
    rootMargin: {
      default: "0px",
      type: String,
    },
    threshold: {
      default: () => [0],
      type: Array,
    },
    once: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      observer: null,
      intersected: 0,
    };
  },

  methods: {
    disconnectObserver() {
      this.observer.disconnect();
      this.observer = null;
    },

    hasIntersection() {
      this.intersected++;
      this.$emit("intersected");

      if (this.once) {
        this.disconnectObserver();
      }
    },
  },

  watch: {
    disconnect(value) {
      if (value) {
        this.disconnectObserver();
      }
    },
  },

  mounted() {
    const dom = this.$refs.main;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.hasIntersection();
          }
        });
      },
      {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      }
    );

    if (dom) {
      this.observer.observe(dom);
    }
  },

  unmounted() {
    this.disconnectObserver();
  },
};
</script>
