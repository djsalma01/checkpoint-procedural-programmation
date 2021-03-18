function convert(sold){
    sold= "$" + sold 
     b = sold.split(".")
     if (b.length >1){
     cent = b[1].split("")
     if ( cent.length == 1){
        b[1]= b[1] +"0"
     }
    }
    else{
        b[1]= b[1] +"00"
    }
return (b)
}
let price = convert(3.123)
price = price.join(".")
console.log(price)