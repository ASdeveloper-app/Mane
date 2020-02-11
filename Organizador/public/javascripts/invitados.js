$(function() {
    $("#add").click(function(){
       addRow();
   });
 });
 
 //Adiciona una fila con los datos a la tabla
 function addRow() { 
     const row = createRow({    
           firstName: $('#first-name').val(),
           lastName:  $('#last-name').val(),  
           celPhone:  $('#mobile-number').val(),
           confirmed: ($('#confirmed').is(':checked'))?'<span class="fa fa-check"></span>':''
         });   
     $('tbody').prepend(row);  
     clean(); 
   } 
 
 //Crea los datos de la fila de la tabla
 function createRow(data) {  return (    
        `<tr>` +     
          `<td>${data.firstName}</td>` +    
          `<td>${data.lastName}</td>` +   
          `<td>${data.celPhone}</td>` +    
          `<td>${ data.confirmed}</td>` +  
        `</tr>`  
       ); 
 }
 
 //Limpia los dato que ingresa el usuario
 function clean() {
   $('#first-name').val('');
   $('#last-name').val('');
   $('#mobile-number').val('');
   $('#confirmed').prop('checked', false);
   $('#first-name').focus();
 }