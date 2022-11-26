var obj1 = {
    name : "person 1",
    age : 5
  };
    var obj2 = {
    age : 5,
    name : "person 1"
     };
      
   
  
  var myComparision = function(obj1, obj2) {
      let key1 = Object.keys(obj1);
      let key2 = Object.keys(obj2);
  
      if(key1.length !==key2.length){
          return false;
      };
      for (let key of key1){
          if(obj1[key] !== obj2[key]){
              return false;
          }
      }
      return true;

  };
  console.log(myComparision(obj1,obj2));

   //  if(JSON.stringify(obj1)===JSON.stringify(obj2))
   
    //  {
    //   console.log("TRUE");
    //   }
    //   else
    //   {
    //       console.log("FALSE");
    //   }


// stringify converts an object to json , making both key and value within quotes.
    // var res1 = JSON.stringify(obj1);
     //var res2 = JSON.stringify(obj2);
    //  if(res1===res2)
    //  {
    //   console.log("TRUE");
    //  }



// console.log(res1);
// console.log(res2);
// {"name":"person 1","age":5}
// {"age":5,"name":"person 1"}


   
