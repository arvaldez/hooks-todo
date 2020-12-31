import React, {useState, useEffect} from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';

const App = () => {
	const [text, setText] = useState('');
	const [list, setList] = useState([
		{text: 'add a to do', isDone: false},
		{text: 'grocery list?', isDone: false},
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(text);
		setText('');
	};

	const addTodo = (text) => {
		let newList = [...list];
		newList = [...newList, text];
		setList(newList);
	};

	const completeTodo = (index) => {
		let newList = [...list];
		newList[index].isDone = true;
		setList(newList);
	};

	const deleteTodo = (index) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};

	const listDisplay = list.map((todo, index) => {
		return (
			<Segment key={index}>
				{todo.text}
				<Button
					circular
					basic
					color='green'
					icon='check'
					onClick={() => completeTodo()}
				/>
				<Button
					circular
					basic
					color='red'
					icon='delete'
					onClick={() => deleteTodo()}
				/>
			</Segment>
		);
	});

	return (
		<>
			<Segment>
				<Form onSubmit={handleSubmit}>
					<input
						placeholder='Add a todo'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</Form>
			</Segment>

			<Segment.Group>{listDisplay}</Segment.Group>
		</>
	);
};

export default App;
