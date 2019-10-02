$(document).ready(function(){
    $(".connect").click(function () {
      client = mqtt.connect($("#address").val());
      client.on("connect", function () {
        console.log("Successfully connected");
        $("#status").val("Successfully connected");
      })
      client.on("message", function (topic, payload) {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds(); 
         console.log("recieved:\ntopic: "+topic+"\npayload: "+payload);   
        $("#tbody1").append("<tr><td>"+topic+"</td><td>"+payload+"</td><td>"+time+"</td></tr>");       
      }) 
    })
  
    $(".disconnect").click(function(){
        client.end();
        $("#status").val("Client Disconnected!");
    })
  
    $(".publish").click(function(){
      var dt = new Date();
      var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
      client.publish($("#ptopic").val(),$("#pload").val());
      // console.log("published:\ntopic: "+$("#ptopic").val()+"\npayload: "+$("#pload").val());
      $("#tbody2").append("<tr><td>"+$("#ptopic").val()+"</td><td>"+$("#pload").val()+"</td><td>"+time+"</td></tr>");
      
    })
    $(".subscribe ").click(function(){
      var dt = new Date();
      var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
      client.subscribe($("#stopic").val());
      $("#tbody3").append("<tr><td>"+$("#stopic").val()+"</td><td>"+time+"</td></tr>");
      
    });
    
    $(".unsubscribe").click(function(){
      client.unsubscribe($("#stopic").val());
  
  })
})