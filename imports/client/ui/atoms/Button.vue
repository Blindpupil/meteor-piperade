<template>
	<button class="button" :class="getClasses">
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<script>
export default {
  name: 'Button',
  computed: {
    getClasses() {
      return (Object.keys(this.$attrs)).join(' ')
    },
  },
  methods: {
    handle() {
      console.log(this)
    },
  },
}
</script>
