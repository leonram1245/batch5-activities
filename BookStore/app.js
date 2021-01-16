let book;
let store = {
    name: "BookStore",
    inventoryList:[   {
        title:'Hajime no Ippo',
        quantity:4,
        value:4000
    },
    {
        title:'x',
        quantity:2,
        value:2000
    }
],
    earnings:0
}


function addBook(title, quantity, value){
    book = {
        title:title,
        quantity:quantity,
        value:value
    }
for(i=0;i<store.inventoryList.length;i++){
 
    if(store.inventoryList[i].title ===title){
      return  console.log('same book, please restock instead')

    }
}
store.inventoryList.push(book)
return  console.log(`${book.title} successfully added`)

}

function restockBook(title,quantity){
    for(i=0;i<store.inventoryList.length;i++){
        if(store.inventoryList[i].title === title){
      store.inventoryList[i].title === title;
      store.inventoryList[i].quantity += quantity;
         return   console.log(`restock of ${title} successful`)
    }      
    
}
return console.log(`no existing book in the inventory, please
proceed to add book`)

}
function sellBook(title,quantity){
    for(i=0;i<store.inventoryList.length;i++){
    
    if(store.inventoryList[i].title ===title
        && store.inventoryList[i].quantity
        >=quantity){
  store.earnings+= store.inventoryList[i].value*quantity;
 return  console.log('Successful Transaction!')
    } 
    if(store.inventoryList[i].title ===title&&store.inventoryList[i].quantity<quantity){
  return console.log(`Transaction Failed! only ${store.inventoryList[i].quantity
  } stocks left`)
    }


}
return console.log(`Transaction Failed! ${title} out of stock`)


}


function totalEarnings(){
 
    console.log(`Total Earnings of ${store.name}: ${store.earnings}Php`)

}

function listInventory(){
    for(i=0;i<store.inventoryList.length;i++){
        console.log(`title:${store.inventoryList[i].title} quantity:${store.inventoryList[i].quantity} value:${store.inventoryList[i].value}Php`)
    }
}

function libraryInstructions(){
    console.log(`commands: addBook(),sellBook(), restockBook(),totalEarnings(),listInventory()`)
}



libraryInstructions()

