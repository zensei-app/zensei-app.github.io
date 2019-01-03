// Add active class to the current button (highlight it)
$('#statement').click(function(){
 $(this).parent().hide().next().show();//hide parent and show next
});

$('#advice').click(function(){
 $(this).parent().hide().next().show();//hide parent and show next
});

$('#trend').click(function(){
 $(this).parent().hide().prev().prev().show();//hide parent and show previous
});