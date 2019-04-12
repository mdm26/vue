class MyVue{
	constructor(obj){
		this.el = obj.el;
		// this.data = obj.data;	
		for(let key in obj.data){
			this[key] = obj.data[key];
		}
		this.html = document.getElementById(this.el).innerHTML;	
		this.render();//调用初始化界面
	}
	setName(name){
		this.name = name;
		// this.data.name = name;
		this.render();
	}
	setAge(age){
		// this.data.age = age;
		this.render();
	}
	//渲染
	render(){
		let str = this.html; 
		for(let key in this){
			str = str.replace(new RegExp("{{"+key+"}}",'ig'),this[key]);
		}
		document.getElementById(this.el).innerHTML = str;		
	}
}