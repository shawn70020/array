const arr = ['hi','you','nice'];
console.log(arr)
// push  expect:['hi','you','nice','me']
const arrPush = ['hi','you','nice'];
arrPush.push('me');
console.log('push',arrPush);

//unshift  expect:['me','hi','you','nice']
const arrUnshift = ['hi','you','nice'];
arrUnshift.unshift('me');
console.log('unshift',arrUnshift);

//pop  expect:['hi','you']
const arrPop = ['hi','you','nice'];
arrPop.pop();
console.log('pop',arrPop)

//shift  expect:['you','nice']
const arrShift = ['hi','you','nice'];
arrShift.shift();
console.log('shift',arrShift);

//reverse  expect:['nice','you','me']
const arrReverse = ['hi','you','nice'];
arrReverse.reverse();
console.log('reverse',arrReverse);

//concat  expect:['hi','you','nice','one','two','three];
const arrConcat1 = ['hi','you','nice'];
const arrConcat2 = ['one','two','three'];
const arrConcat3 = arrConcat1.concat(arrConcat2)
console.log(arrConcat3);

