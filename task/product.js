  let Products = [
    {
        "id": 1,
        "name": "Mens T-Shirt",
        "image_url": "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPAMPLE-MEN-KIKHAL1070621AA374474/1562997954268_0..jpg",
        "price": 500.00,
        "quantity": 7,
        "itemcount":0
    },
    {
        "id": 2,
        "name": "Neck T-Shirt",
        "image_url": "https://assets.ajio.com/medias/sys_master/root/20210403/zdtd/60688efcf997dd7b6460e918/-473Wx593H-461592493-multi-MODEL.jpg",
        "price": 600.00,
        "quantity": 5,
        "itemcount":0
      },
      {
        "id": 3,
        "name": "Woman dress 1",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR890o8nBZNH50tW9vwLIHqRnrMSzMswvN_A&usqp=CAU",
        "price": 300.00,
        "quantity": 7,
        "itemcount":0
    },
    {
        "id": 4,
        "name": "Woman dress 2",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVrzkKcNYih9CE4BbBqiGDhH4Ad8yGgJ8TA&usqp=CAU",
        "price": 800.00,
        "quantity": 5,
        "itemcount":0
      },
      {
        "id": 5,
        "name": "Woman dress 3",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnJf7dZZvKwoby12cMfzClNHyqp79euweKw&usqp=CAU",
        "price": 1100.00,
        "quantity": 7,
        "itemcount":0
    },
    {
        "id": 6,
        "name": "Baby Ware",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWkjcuT_QucP1s6yMd3fFi1Y93-sPjM7UMw&usqp=CAU",
        "price": 400.00,
        "quantity": 5,
        "itemcount":0
      }
  ]

 
  function getdata() {
    var output = '';
    
    for (index = 0; index < Products.length; index++) {
        output +=
            
            '<div onclick="javascript:cart('+Products[index].id+')">' +
            '<img src="' + Products[index].image_url + '" width =" 150" height="100">' +
            '<br>' +Products[index].name + '<br>'+
            '</div>';

    }
    document.getElementById('div1').innerHTML = output;
    view();
   

  
  


}
var cartpro = [];


function cart(val)
{
    
    for(i=0;i<Products.length; i++)
    {
        var flag=0;
        if(Products[i].id==val)
        {

           for (j=0;j<cartpro.length;j++)
           {
            if(cartpro[j].id==val)
            {
                cartpro[j].itemcount++;
                flag=1;

            }
            
               


            
        
           }
           if(flag==0){
            cartpro.push(Products[i]);
            cartpro[j].itemcount++;
            flag=0;

           }
           

        view();

       
        
    }
   
}
}

function view()
{
    var output = '';
    var t=0;
    for(j=0;j<cartpro.length; j++)
    {
        output +=
        
        '<div>' +
        '<img src="' + cartpro[j].image_url + '" width =" 40" height="20">' +
        '' +cartpro[j].name +
        ' quantity' +cartpro[j].itemcount + 
        ' BDT' +cartpro[j].price +' per quantity'+ 
        '<button class="btn2" onclick="javascript:remove('+cartpro[j].id+')" ><i class="fa fa-trash-o"> </i></button>'+
        '</div>';
        t=t+((cartpro[j].price)*(cartpro[j].itemcount));
        console.log(t);

    }
    document.getElementById('div2').innerHTML = output;
    total=t;

    var ot='';
    ot +=

    '<table>'+
    '<tbody>'+
        '<tr><td> Discout </td><td > 0.00bdt </td></tr>'+
        '<tr><td> subtotal </td><td >'+t+ 'bdt</td></tr>'+
        '<tr><td> tax </td><td > 0.00bdt </td></tr>'+
        '<tr><td> total </td><td > '+t+ 'bdt </td></tr>'+
      
       
    '</tbody>'+
'</table>';


document.getElementById('t1').innerHTML = ot;
document.getElementById('b1').innerHTML = 'PAY '+t+' BDT';

   

}

function remove(val)
{
    for(i=0;i<cartpro.length; i++)
    {
        if(cartpro[i].id==val)
        {
            if(cartpro[i].itemcount==1)
            {
                cartpro[i].itemcount--;
                cartpro.splice(i,1);
            
            view();
            break;

            }
            else{
                cartpro[i].itemcount--;
                view();
                break;

            }
            
            


            
        }

       
        
    }

}





