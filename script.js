function mincost(arr)
{ 
//write your code here
// return the min cost
	let n = arr.length;
	let totalCost = 0;
	while(n>1){
		arr.sort();
		let a = arr.splice(0,1);
		let b = arr.splice(0,1);
		let cost = a[0]+b[0];
		totalCost += cost;
		arr.push(cost);
		n--;
	}
	return totalCost;
  
}

module.exports=mincost;
