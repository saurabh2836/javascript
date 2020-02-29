// Date.prototype.lastYear = () => {
//   return this.getFullYear() - 1;
// }
// new Date('1900-10-10').lastYear()




// Array.prototype.map = function(){
//   let arr = [];
//   for(let i= 0; i < this.length; i++){
//     arr.push((this[i]+' saurabh'));
//   }
//   return arr;
// }

// console.log([1,2,3].map())

Function.prototype.bind = function(whoOsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe,arguments
      )
    }
  }