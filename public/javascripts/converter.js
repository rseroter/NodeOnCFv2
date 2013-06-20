//client side script invokes route on server

$(document).ready(function () {

    $('#convertsubmitbutton').click(function(){
        //alert('called ...');
        var amount = $('#amount').val();
        var sourcecurrency = $('#source').val();
        var targetcurrency = $('#target').val();

        //call server-side route
        $.get('/convert?amount=' + amount +'&source=' + sourcecurrency + '&target=' + targetcurrency, function(data){
            $('#placeholder').append(data.lhs + ' = ' + data.rhs);
        });
    });
});
