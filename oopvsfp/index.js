
///caching function using clourse
function memoizedAddTo80(n){
    let cache = {};
    return function(n) {
      if(n in cache){
        return cache[n];
      }else{
        console.log('long time');
        cache[n] = n + 80;
        return cache[n];
      }
    }
  }
  
  const memorized = memoizedAddTo80(4);
  
  
  console.log('1',memorized());
  console.log('2',memorized());

  //compose
const compose =(f,g) => (data) =>f(g(data))
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3,makePositive)


multiplyBy3AndAbsolute(-50)