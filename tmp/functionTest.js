// functionTest.js

function test0({var0, var1, var2}){
	console.log("*** test0 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
	console.log("var1", var1)
	console.log("var2", var2)
}
function test1({var0, var1, var2}={}){
	console.log("*** test1 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
	console.log("var1", var1)
	console.log("var2", var2)
}
function test2(var0, var1, var2){
	console.log("*** test2 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
	console.log("var1", var1)
	console.log("var2", var2)
}
function test3(var0){
	console.log("*** test2 ***")
	console.log("arguments", arguments)
	console.log("var0", var0)
	return new Promise((resolve, reject)=>{
		validate("yay", resolve, reject)
	})

	function validate(arguments, resolve, reject){
		resolve(arguments)
	}
}
function test4(arguments){
	console.log("*** test4 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
}
function test5(args){
	console.log("*** test5 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
}
function test6({...args}){
	console.log("*** test6 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
}
function test7(args){
	Object.keys(args).forEach((key) => {
    Object.defineProperty(this, key, {
        value: args[key]
    });
	});
	console.log("*** test7 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
}
function test8({}){
	// Object.keys(arguments).forEach((key) => {
  //   Object.defineProperty(this, key, {
  //       value: arguments[key]
  //   });
	// });
	console.log("*** test8 ***")
	console.log("this.var0", this.var0)
	console.log("arguments", arguments)
	console.log("var0", var0)
}
function test9({var0, var1, var2}){
	console.log("*** test9 ***")
	console.log("arguments", arguments)
	console.log("var0", var0)
	if(var0 == var0){
		console.log(true)
	}
}
const test10enums = { 
	var0: 1, 
	var1: 2, 
	var2: 3
}

function test10({var0, var1, var2}){
	console.log("*** test10 ***")
	console.log("arguments", arguments)
	console.log("var0", var0)
	if(test10enums[var0] == test10enums["var0"]){
		console.log(true)
	}
}
function test11({var0, var1, var2}){
	console.log("*** test11 ***")
	console.log("arguments", arguments)
	(function(this){
		console.log("var0", var0)
	})(function(this){
		console.log("var1", var1)
	})
}

let testValues = ["test0", "test1", "test2"]
// try {
// 	test0({var0: testValues[0],var1: testValues[1],var2: testValues[2]})
// } catch(error){console.error(error)}
// try {
// 	test1({var0: testValues[0],var1: testValues[1],var2: testValues[2]})
// } catch(error){console.error(error)}
// try {
// 	test2({var0: testValues[0],var1: testValues[1],var2: testValues[2]})
// } catch(error){console.error(error)}
// try {
// 	test3().then(ret=>{console.log(ret)})
// } catch(error){console.error(error)}
// try {
// 	test0({var0: testValues[0]})
// } catch(error){console.error(error)}
// try {
// 	test1({var0: testValues[0]})
// } catch(error){console.error(error)}
// try {
// 	test4({var0: testValues[0]})
// } catch(error){console.error(error)}
// try {
// 	test5({var0: testValues[0]})
// } catch(error){console.error(error)}
// try {
// 	let args = {var0: testValues[0]}
// 	test6(args)
// } catch(error){console.error(error)}
// try {
// 	let args = {var0: testValues[0]}
// 	test7(args)
// } catch(error){console.error(error)}
// try {
// 	let args = {var0: testValues[0]}
// 	test8(args)
// } catch(error){console.error(error)}
// try {
// 	test9({var0: "var0"})
// } catch(error){console.error(error)}
// try {
// 	test10({var0: "var0"})
// } catch(error){console.error(error)}
// try {
// 	test11({var0: "var0", var1: "var1", var2: "var2"})
// } catch(error){console.error(error)}

