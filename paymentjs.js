function  slipSet(){
    let pageHTML = `
   
   <h1>SchoolStore</h1>
  
    <h3>check out</h3>
  
    <div class="slip-container">
      
      <div class="itemstable">
    ${itemStats()}
    
      </div>
    </div>
  
  
  
    </div>
  <button>process payment</button>
    `;
    
    document.querySelector(".main").innerHTML= pageHTML;
    
}
function itemStats(){
  let done = [];
  let html = "";

  for(let i = 0; i < cart.length; i++){

    if(done.includes(cart[i].name)){
      continue; // already showed Pen, skip this Pen
    }

    done.push(cart[i].name);

    let num = getAmount(cart[i].name);

    html = html + `<p>${cart[i].name} </p>
    <p>${num}</p>`;
  }

  return `
    <p>total price</p><p class="price">R${totalPrice}</p>
      <p>total items</p><p class="quantity">${quantity}</p>
    
    
    <h3>name </h3><h3>quantity</h3> `+ html; 
}



function getAmount(name){
  let a = 0;
  for(let b = 0; b < cart.length; b++){
    if(name === cart[b].name){
      a++;
    }
  }
  return a;
}


/*
 * 
 * 
 *


/*

function getItems(){*/
    /*
    let items = "";
    
    
    for(let index=0;index<cart.length;index++){
        let  num = 1;
        let name  = cart[index].name;
        let price = cart[index].price;
        
           for(let a=index+1;a<cart.length;a++){
            if(cart[index].code===cart[a].code){
                num++;
           cart.splice(a,1);
                
            }
               
               
           }
        
        items= items + `<p>${name} (R${price} each)</p>
        <p>*[${num}]</p>`;
    }
    */
    /*
    cart.forEach(
    function (value,index){
        let num = 0;
        for(let a=index;a<cart.length;a++){
            if(value.code===cart[a].code){
                num++;
                
            }
        }
        
        items= items + `<p>${value.name} (R${value.price} each)</p>
        <p>*[${num}]</p>`;
    }
    );
    *//*
    return items;
}*/
/*
function itemStats(){
    
   
    let list = [];
    list[0]={name : cart[0].name,
        number : getAmount(cart[0].name)
    };
    let name = "";
    let amount = 0;
    
    for(let c=0;c<cart.length;c++){
        name = cart[c].name;
        
        if(name===list[c].name and list[c].number===getAmount(name))
        {
            continue;
        }else{
            list.push({name : cart[c].name,
        number : getAmount(cart[c].name)});
        }
        
    }
    
    alert(JSON.stringify(list));
    
}

function getAmount(name){
    let a = 0;
    for(let b=0;b<cart.length;b++){
        if(name===cart[b].name)
        a++;
    }
    return a;
}
 */
