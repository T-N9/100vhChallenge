function switchOn(){
    $('#connection').text("Connected");
    $('#connectionDes').html(`Your internet is <span>private</span>.`);
    $('#connectionDes').addClass('oranges');
}
function switchOff(){
    $('#connection').text("Disconnected");
    $('#connectionDes').text("Your DNS queries are not private.");
}
function checking(){
    let ramNum2=Math.floor(Math.random() * 1000) + 500;
    console.log(ramNum2);
    $('#connection').text("Checking connection");
    $('#connectionDes').text("");
    setTimeout(switchOn,ramNum2);
}

$('#switchPath').click(function(){
    let ramNum1=Math.floor(Math.random() * 3000) + 1000;
    
    console.log(ramNum1);
    $(this).toggleClass('bg-orangered');
    $('#switch').toggleClass('switch-on').toggleClass('switch-off');
    $('#connection').text("Connecting");
    $('#connectionDes').text("Updating connection info");
    if($('#switch').hasClass('switch-on')){
        setTimeout(checking,ramNum1);
    }else{
        switchOff();
    }
});