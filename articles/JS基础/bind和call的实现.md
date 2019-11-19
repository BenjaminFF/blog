## Call
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

**语法**<br>
>//if(thisArg == undefined|null) this = window，<br>
//if(thisArg == number|boolean|string) this == new Number()|new Boolean()| new String()<br>
>**fun.call(thisArg, arg1, arg2, ...)**<br>

示例：
```js
function foo1() {
    console.log(this);    //window
}
foo1.call();

function foo2(a, b, c) {
    console.log(this);    //[Number: 1]
    console.log(a);       //2
    console.log(b);       //3
    console.log(c);       //undefined
}
foo2.call(1, 2, 3);

let obj = {
    value: 1
}
function foo3(a, b) {
    console.log(this.value);   //1
    console.log(a);   //2
    console.log(b);   //3
}
foo3.call(obj, 2, 3);
```

**模拟实现**<br>
```js
Function.prototype.call2 = function (context, ...args) {
    context = context || window;
    context.fn = this;
    let result = eval('context.fn(' + args + ')');

    delete context.fn;
    return result;
}

let obj = {
    value: 1
}

function foo(a, b) {
    console.log(this.value);   //1
    console.log(a);  //2
    console.log(b);  //3
}

foo.call2(obj, 2, 3); 
```

## Bind

bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

**语法**
```js
function.bind(thisArg[,arg1[,arg2[, ...]]])
```
**thisArg**：调用绑定函数时作为this参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用bind在setTimeout中创建一个函数（作为回调提供）时，作为thisArg传递的任何原始值都将转换为object。如果bind函数的参数列表为空，执行作用域的this将被视为新函数的thisArg。<br>

**arg1, arg2, ...**：当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。<br>

**返回值**：返回一个原函数的拷贝，并拥有指定的this值和初始参数。<br>

**示例1**
```js
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

**示例2(偏函数)**<br>
bind()的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数（如果有的话）作为bind()的参数写在this后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。
```js
function list() {
  return Array.prototype.slice.call(arguments);
}

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); 
// [37]

var list3 = leadingThirtysevenList(1, 2, 3); 
// [37, 1, 2, 3]
```
