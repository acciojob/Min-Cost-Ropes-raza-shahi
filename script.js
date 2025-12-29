function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalMinCost = 0;
	while (arr.length >1) {
		arr.sort((a,b)=> a-b);
		let first = arr.shift();
		let second = arr.shift();
		let minCost = first+second;
		totalMinCost +=minCost;
		arr.push(minCost);
	}
  return totalMinCost;
}

module.exports=mincost;
