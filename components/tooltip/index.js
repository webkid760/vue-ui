import Button from './src/tooltip.vue';

Button.install = function(Vue){
	Vue.component(Button.name,Button)
}

export default Button;