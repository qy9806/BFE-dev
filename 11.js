// understand reduce and call
// 
function pipe(funcs) {
	return function(x){
		return funcs.reduce((pre,cur)=>{
			return cur.call(this,pre)
		},x)
	}
}
