<template>
  <div ref="getMoreRenderPost">
    <slot />

    <slot name="loader" />
  </div>
</template>

<script>
export default {
  name: "IntersectionObserverComponent",

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
  },

  data() {
    return {
      observer: null,
    };
  },

  methods: {
    disconnectObserver() {
      this.observer.disconnect();
    },

    addMoreRender() {
      this.$emit("hasIntersection");
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
    const dom = this.$refs.getMoreRenderPost;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.addMoreRender();
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
