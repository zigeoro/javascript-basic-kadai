let num = Math.floor(Math.random() * 100)


  if(num%15 === 0)
  {
  console.log("3と5の倍数です");
  }
  else if(num%3 === 0)
  {
  console.log("3の倍数");
  }
  else if(num%5 === 0)
  {
  console.log("5の倍数");
  }else
  {
  console.log(num);
  }
  

  for(let i = 1; i <= 100; i ++){

    console.log( i );
    if(i%3 === 0){
    console.log("3の倍数です");
    }
    else if(i%5 === 0)
    {
    console.log("5の倍数です");
    }
    else if(i%15 === 0)
    {
    console.log("3と5の倍数です");
    }
    else{
    console.log("3の倍数でも5の倍数でもありません");
    }
    }