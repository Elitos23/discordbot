function alerted(){
    const whurl ="https://discord.com/api/webhooks/968418992035336202/aHZIzq61alpYkGqV1e4h5zDmz2ucT-y9wlb3ae73Ba5ZisP78xTclkECDUbtT8axaBWF"
    var name = document.getElementById('name').value;
    var mintPrice = document.getElementById('mintPrice').value;
    var timePub = document.getElementById('timePub').value;
    var timeWL = document.getElementById('timeWl').value;
    var stock = document.getElementById('stock').value;
    var dis = document.getElementById('dis').value;
    var twitter = document.getElementById('twitter').value;
    var token = document.getElementById('token').value;
    var anal = document.getElementById('anal').value;
  
  var date1 = new Date('2022-04-25T'+ timePub );
  var epoch1 = date1.getTime()/1000.0;
  var date2 = new Date('2022-04-25T'+ timeWL );
  var epoch2 = date2.getTime()/1000.0;
  
    const msg = {
        "content": `!s `+ name +` __**` + name + `**__
  
        > - **Mint price**: `+ mintPrice +` 
        > - **Stock**: `+ stock +`
        > - **Time**: 
        <t:`+ epoch1 + `> (WL)
        <t:`+ epoch2 + `> (Public)
        
        > - **Discord**: `+ dis +`
        > - **Twitter**: `+ twitter +`
        > - **WL token**:
        `+ token +`
        
        > **Анализ**: `+ anal +``
    }
    
    fetch(whurl + "?wait=true", 
    {"method":"POST", 
    "headers": {"content-type": "application/json"},
    "body": JSON.stringify(msg)})
    .then(a=xa.json()).then(console.log)
  }