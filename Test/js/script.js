$(document).ready(function() {
    var del=$('#delete');
    del.click(function(e) {
        e.preventDefault();
        $('#table1 tbody').remove();
    })
    
    $('#modalClose').click(function(){
        $('#modal').hide();
        console.log($('.modalBox input')[0].value);
        //console.log($('.modalBox input')[1].value);
    });
     $('#modalOK').click(function(e){
         e.preventDefault();
        $('#modal').hide();
         
        function addRow(){
            let arr = [];
            for (i=0; i<$('#head1 th').length; i++){
                arr.push("<td>"+$('.modalBox input')[i].value+"</td>");
            }
            var $str=arr.join(' ');
            return $str;
        }
         
        $('#table1 tbody').append('<tr>'+addRow()+'</tr>');
    });
    
    var add=$('#add');
    add.click(function(e) {
        e.preventDefault();
        $('#modal').show();
    });
    
    var cl=$('#clear');
    cl.click(function(e) {
        e.preventDefault();
        $('#table2 tbody').remove();
    })
})
