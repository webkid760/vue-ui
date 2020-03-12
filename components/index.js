
import Button from './button/index.js'
import Dialog from './dialog/index.js'
import Tooltip from './tooltip/index.js'

const components = [
	Button,
	Dialog,
	Tooltip
];

const install = (Vue)=>{
	if(install.installed){
		return;
	}
	components.map(component=>Vue.component(component.name,component));
}

export default {
	install,
	Button,
	Dialog,
	Tooltip
}