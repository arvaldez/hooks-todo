import React, {useState, useEffect} from 'react';
import {Segment, Form, Grid, Header} from 'semantic-ui-react';
import './App.css';

import Todo from './Todo';

const App = () => {
	const [text, setText] = useState('');

	const [list, setList] = useState([
		{text: 'add a to do', isDone: false},
		{text: 'grocery list?', isDone: false},
	]);

	const [todoLeft, setTodoLeft] = useState(0);

	useEffect(() => {
		const list = JSON.parse(localStorage.getItem('list'));
		if (list) {
			setList(list);
		}
	}, []);

	useEffect(() => {
		setTodoLeft(list.filter((todo) => !todo.isDone).length);
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(text);
		setText('');
	};

	const addTodo = (text) => {
		let newList = [...list, {text, isDone: false}];
		setList(newList);
	};

	const completeTodo = (index) => {
		let newList = [...list];
		newList[index].isDone = !newList[index].isDone;
		setList(newList);
	};

	const deleteTodo = (index) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};

	return (
		<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
			<Grid.Column style={{maxWidth: 450}}>
				<Header as='h1' color='teal' textAlign='center'>
					To Do
				</Header>
				<Segment>
					<Form onSubmit={handleSubmit}>
						<input
							placeholder='Add a todo'
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
					</Form>
				</Segment>

				<Segment.Group>
					{list.map((todo, index) => {
						return (
							<Todo
								todo={todo}
								index={index}
								key={index}
								deleteTodo={deleteTodo}
								completeTodo={completeTodo}
							/>
						);
					})}
				</Segment.Group>
				<Header as='h3' color='grey' textAlign='center'>
					Remaining Tasks: {todoLeft}
				</Header>
			</Grid.Column>
		</Grid>
	);
};

export default App;
