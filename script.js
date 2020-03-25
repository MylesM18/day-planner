const todo = JSON.parse(localStorage.getItem('todos')) || {}



function render(){
    $('#main').html('')
    for(var i = 6; i < 24; i++){
   $('#main').append(`<div class="row">
<div class="col-2">${i}:00</div>
<textarea type="text" class="col-7 ${todo[i]? 'hasTodo' : 'noTodo'}" id=${i}>${todo[i]||''}</textarea>
<button class="col-2 col-offset-1">
    Submit
</button>
</div>`)
}
}

render()




$('button').on('click', function(){
var value = $(this).siblings('textarea').val().trim();
var key = $(this).siblings('textarea').attr('id');
todo[key] = value;
localStorage.setItem('todos', JSON.stringify(todo))

if (localStorage.length === null ) {
    localStorage.clear();
} 
render()
 
})




