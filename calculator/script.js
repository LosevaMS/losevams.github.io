function insert(num){
  document.querySelector('.current').innerHTML+=num;
}

function result(){
  var exp =  document.querySelector('.current').innerHTML;
  if (exp && exp.length>1){
  //sqrt
  if (exp.indexOf('√')!==-1 && exp.indexOf('^')===-1 && exp.indexOf('+')===-1 && exp.indexOf('*')===-1 
   && exp.substring(exp.indexOf('√')+1, exp.length).length>0){
      var res = Math.sqrt(parseFloat(exp.substring(exp.indexOf('√')+1, exp.length)));
      document.querySelector('.current').innerHTML = res;
      document.querySelector('.previous').innerHTML = exp;
      console.log('sqrt');
  }
  //division
    if (exp.indexOf('÷')!==-1 && exp.indexOf('%')===-1 && exp.indexOf('+')===-1 && exp.indexOf('*')===-1 
    && exp.substring(0,exp.indexOf('÷')).length>0 && exp.substring(exp.indexOf('÷')+1, exp.length).length>0){
      if (exp.substring(exp.indexOf('÷')+1, exp.length)==='0'){
        console.log(exp.substring(exp.indexOf('÷')+1, exp.length));
        document.querySelector('.current').innerHTML = 'Error!';
      }
      else {
        var res = parseFloat(exp.substring(0,exp.indexOf('÷')))/parseFloat(exp.substring(exp.indexOf('÷')+1, exp.length));
        document.querySelector('.current').innerHTML = res;
        document.querySelector('.previous').innerHTML = exp;
        console.log('/');
      } 
    }
    //substraction
    if (exp.indexOf('-')!==-1 && exp.indexOf('÷')===-1 && exp.indexOf('%')===-1 && exp.indexOf('*')===-1
    && exp.substring(0,exp.lastIndexOf('-')).length>0 && exp.substring(exp.lastIndexOf('-')+1, exp.length).length>0){
      var res = parseFloat(exp.substring(0,exp.lastIndexOf('-')))-parseFloat(exp.substring(exp.lastIndexOf('-')+1, exp.length));
      document.querySelector('.current').innerHTML = res;
      document.querySelector('.previous').innerHTML = exp;
      console.log('-');
    }
    //addition
    if (exp.indexOf('+')!==-1 && exp.indexOf('÷')===-1 && exp.indexOf('%')===-1 && exp.indexOf('*')===-1
    && exp.substring(0,exp.indexOf('+')).length>0 && exp.substring(exp.indexOf('+')+1, exp.length).length>0){
      var res = parseFloat(exp.substring(0,exp.indexOf('+')))+parseFloat(exp.substring(exp.indexOf('+')+1, exp.length));
      document.querySelector('.current').innerHTML = res;
      document.querySelector('.previous').innerHTML = exp;
      console.log('+');
    }
    //multiplication
    if (exp.indexOf('*')!==-1 && exp.indexOf('÷')===-1 && exp.indexOf('+')===-1 && exp.indexOf('%')===-1
    && exp.substring(0,exp.indexOf('*')).length>0 && exp.substring(exp.indexOf('*')+1, exp.length).length>0){
      var res = parseFloat(exp.substring(0,exp.indexOf('*')))*parseFloat(exp.substring(exp.indexOf('*')+1, exp.length));
      document.querySelector('.current').innerHTML = res;
      document.querySelector('.previous').innerHTML = exp;
      console.log('*');
    }
    //square
    if (exp.indexOf('^')!==-1 && exp.indexOf('÷')===-1 && exp.indexOf('+')===-1  
    && exp.indexOf('*')===-1 && exp.substring(0,exp.indexOf('^')).length>0){
      console.log(parseFloat(exp.substring(0,exp.indexOf('^'))));
     var square = Math.pow(parseFloat(exp.substring(0,exp.indexOf('^'))),parseFloat(exp.substring(exp.indexOf('^')+1, exp.length)));
     document.querySelector('.previous').innerHTML = exp;
     document.querySelector('.current').innerHTML = square;
     console.log('square');
  }
  }
}

function deleting(){
  document.querySelector('.current').innerHTML = '';
  document.querySelector('.previous').innerHTML = '';
}

function deleteOne(){
  var current = document.querySelector('.current').innerHTML;
  document.querySelector('.current').innerHTML = (current.substring(0,current.length-1));
}
