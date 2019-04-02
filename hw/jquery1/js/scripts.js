//$('#actiontitle').css('color', 'red');
//$('body').html ('<h2>We are done!</h2><p>See ya later!</p>')
//});
//need to include that ^


//executes when you first open page//
var step = 0;
var titles = [
  'Prepare for take-off', // this is 0 titles[0]
  'Put seat belt on', // this is 1 titles[1]
  'Turn on the engines', // this is 2 titles[2]
  'Turn the lights on', // this is title 3[3]
  'Press go!' // this is title 4[4]
];
$(function(){
  $('#stepinfo, section, footer, .prev').hide();
}); //very first load function

$('.start').on('click', function(){ //start function
  //do stuff when the button is clicked
 $('.intro').hide();
//  $('.start').hide();
  $('footer, #stepinfo').show();

step = 1;
//$('#step1').show(); - works but you should use the below
$('#step'+step).show();
// set the title for our current step
$('#stepinfo').text('Step '+step+': '+titles[step-1]);
});

$('.next').on('click', function (){
  //make the change only if we are under our number of steps
$('#step'+step).hide();
  step++;
  if(step ==2) {
    $('.prev').show();
  }

if(step == 5){
  $('.next').hide();
}

if(step <= 5) {
  $('#step'+step).show();

$('#stepinfo').text('Step '+step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();


}

});

//Previous

$('.prev').on('click', function (){
  //make the change only if we are under our number of steps
$('#step'+step).hide();
  step--;
  if(step == 1) {
    $('.prev').hide();
  } else {
    $('.next').show();
  }
if(step >= 1) {
  $('#step'+step).show();

$('#stepinfo').text('Step '+step+': '+titles[step-1]);
} else {
step--;
$('#step'+step).show();
}
});
