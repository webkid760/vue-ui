<template>
	<button @click='handleClick'><slot name="text">i am a button2</slot></button>
</template>


<script>
	export default{
		name:'saber-button',
		props:{},
		data(){
			return {
				msg:'button'
			}
		},
		methods:{
	      handleClick(evt) {
	        this.$emit('click', evt);
	      }
		}

	}

</script>

<style>
	

</style>