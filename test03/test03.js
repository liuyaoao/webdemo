$(document).ready(function (){
	// js的面向对象的测试
	console.log("hahaha!!!");
	var Parent = function (){
		this.name = "liuyaoao";
	}
	Parent.prototype.say = function (){
		var name = "aoaoao";
		return this.name;
	}

	var Child = function (){
		this.name = "aoliao";
		Child.prototype.talkSome = function (){
			console.log("talk something..");
		};
	}

	var inherit = function (child, parent){
		//原型属性应该指向一个对象，而不是一个函数。故如果要使用原型链里的方法，
		//那该原型一定是要指向一个用new创建的新对象的。
		child.prototype = new parent(); 
	}
	inherit(Child,Parent);
	// Child().say(); //这种方式会报错。
	// Child.say(); //  这种方式也会报错。
	// Child.prototype.say();  // 这种方式不报错，但是不会运行。
	// Child.prototype.talk(); //这种也会报错。
	Child(); //这样可以运行。
	var _child = new Child();  //总结，要调用原型链中的方法，一定要先new出这个对象的实例。
	console.log(_child.say());
	console.log(_child.talkSome()); //返回的是一个undefined类型。

// ===========================================分割线=======================================
	//简单排序算法分析。
	var page = {
		var arr = [];
		getRandomForM2N:function(m, n){
			return parseInt(Math.random()*(n-m)+m);
		},
		// 插入排序。
		insertSort:function(arr){ //先把第一个作为有序的，然后再把后面的依次插入前面有序列表的某个位置。
			for(var i=1;i<arr.length;i++){
				var key = arr[i];
				for(var j=i-1;j>=0;j--){
					if(arr[j] > key){
						arr[j+1] = arr[j];
						arr[j] = key;
					}
				}
			}
			return arr;
		},
		// 快速排序。
		fastSrot:function(arr){
			
		}
	};
// ===========================================分割线=======================================

	for(var i=0;i<100;i++){
		arr.push(page.getRandomForM2N(1, 100));
	}

});