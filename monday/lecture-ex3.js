const data = fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then((json) => {
		outputTodos(json);
		generateDeleteButtons();
	});

const outputTodos = (json) => {	
	const todoContainer = document.querySelector("#todos");
	todoContainer.innerHTML = ""; // clear "Loading..." text
	json.forEach((prop) => {
		//console.log(prop.title);
		const todoHtml = `<div id="${prop.id}" class="todo-item-container">
			<p>${prop.title}</p>
			<span div id="close_${prop.id}" class="close-todo">X</span>
		</div>`;
		todoContainer.innerHTML += todoHtml;
		
	});
};

const deleteTodo = (id) => {
	fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
		method: 'DELETE'
	})
		.then(response => response.json())
  	.then(res => console.log("res", res));
};

const generateDeleteButtons = () => {
	const removeTodo = document.querySelectorAll('.close-todo');
	removeTodo.forEach( (el) => {
		el.addEventListener('click', (event) => {
			event.target.parentElement.remove();
			console.log(123);
			// deleteTodo(e.target.id)
			// This isn't the best way because if a UI change occurs, this functionality might break. 
			// A good method might me to add the id to the button too, but prefix with del_<the_id>, so they are not conflicting. Then remove the del_ part to get just the id. Then target the element you need to delete by id. But this serves as a visual demo for now. 
		});
	});
};
