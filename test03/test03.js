$(document).ready(function (){
	// js的面向对象的测试
	console.log("hahaha!!!");
	var Parent = function (){
		this.name = "liuyaoao";
		this.age = 28;
	}
	Parent.prototype.age = 27;
	Parent.prototype.say = function (){
		return this.name;
	}
	Parent.prototype.getAge = function (){
		return this.age;
	}

//////////////////
	var Child = function (){
		this.name = "aoliao";
		Child.prototype.talkSome = function (){
			console.log("talk something..");
		};
	}

	function extend(Child, Parent) {
　　　　var F = function(){ this.uber = Parent.prototype;};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
// 　　　　Child.uber = Parent.prototype;
　　}

	extend(Child,Parent);
	// Child().say(); //这种方式会报错。
	// Child.say(); //  这种方式也会报错。
	// Child.prototype.say();  // 这种方式不报错，但是不会运行。
	// Child.prototype.talk(); //这种也会报错。
	Child(); //这样可以运行。
	var _child = new Child();  //总结，要调用原型链中的方法，一定要先new出这个对象的实例。
	console.log(_child.say());
	console.log(_child.talkSome()); //返回的是一个undefined类型。

	/*
	每个被new实例化的对象都会包含一个__proto__ 属性，它是对构造函数的 prototype 对象的引用。
	实例化的对象没有直接引用prototype。只有构造函数有对prototype的引用。

	因为Child.prototype等于了一个匿名的实例化的对象了。
	_child.__proto__ === Child.prototype   //true
	_child.__proto__ === Parent   //false
	_child.__proto__ === Parent.prototype   //false

	_child.__proto__ === Child.prototype  //true
	//在上面的例子中Child.prototype已经是等于一个实例化的对象了的。
	Child.prototype.__proto__ === Parent.prototype    //true
	_child.__proto__.__proto__ === Parent.prototype   //true
	Parent.prototype.__proto__ === Object.prototype   //true
	Object.prototype.__proto__ === null   //true 
	*/
	// ===========================================分割线=======================================
	//简单排序算法分析。
	var page = {
		getRandomForM2N:function(m, n){
			return parseInt(Math.random()*(n-m)+m);
		},
		// 插入排序。
		insertSort:function(arr){ //先把第一个作为有序的，然后再把后面的依次插入前面有序列表的某个位置。
			for(var i=1;i<arr.length;i++){
				var key = arr[i];  //待插入的元素，从第二个开始。
				for(var j=i-1;j>=0;j--){  //把待插入的元素依次插入到前面已经排好序部分的某个位置。
					if(arr[j] > key){
						arr[j+1] = arr[j];
						arr[j] = key;
					}
				}
			}
			return arr;
		},
		// 冒泡排序。
		bobbleSrot:function(arr){
			for (var i = 0; i < arr.length; i++) {
			    //每一次由底至上地上升
			    for (var j = arr.length-1; j > i; j--)  {
			        if (arr[j] < arr[j-1])  {
			        	var temp = arr[j-1];
			        	arr[j-1] = arr[j];
			        	arr[j] = temp;
			        } 
			    } 
			}
			return arr;
		},
		// 冒泡排序2。
		bobbleSrot2:function(arr){
			for(var i=0;i<arr.length-1;i++){
				for(var j=i+1;j<arr.length;j++){  
					var key = arr[i];  //
					if(arr[j] < key){
						arr[i] = arr[j];
						arr[j] = key;
					}
				}
			}
			return arr;
		},
		// 快速排序。
		quicksort:function(arr, left, right) {
			if (left < right) {
				var key = arr[left];
				var low = left;
				var high = right;
				while (low < high) {
					// high下标位置开始，向左边遍历，查找不大于基准数的元素
					while (low < high && arr[high] >= key) {
						high--;
					}
					if (low < high) {// 找到小于准基数key的元素
						arr[low] = arr[high];// 赋值给low下标位置，low下标位置元素已经与基准数对比过了
						low++;// low下标后移
					} else {// 没有找到比准基数小的元素
						// 说明high位置右边元素都不小于准基数
						break;
					}
					// low下标位置开始，向右边遍历，查找不小于基准数的元素
					while (low < high && arr[low] <= key) {
						low++;
					}
					if (low < high) {// 找到比基准数大的元素
						arr[high] = arr[low];// 赋值给high下标位置，high下标位置元素已经与基准数对比过了
						high--;// high下标前移，
					} else {// 没有找到比基准数小的元素
						// 说明low位置左边元素都不大于基准数
						break;
					}
				}
				arr[low] = key;// low下标赋值基准数
				page.quicksort(arr, left, low - 1);
				page.quicksort(arr, low + 1, right);
			}
		}
	};
	// ===========================================分割线=======================================
	var arr = [];
	for(var i=0;i<100;i++){
		arr.push(page.getRandomForM2N(1, 100));
	}
	console.log(page.insertSort([12,5,8,6,2,9,1]));
	console.log(page.bobbleSrot([10,4,7,5,2,8,1]));
	console.log(page.bobbleSrot2([10,4,7,5,2,8,1]));
	var tempArr = [10,4,7,5,2,8,1];
	page.quicksort(tempArr,0,tempArr.length-1);
	console.log(tempArr);
});