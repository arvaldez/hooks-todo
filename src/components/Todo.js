import React, {useState} from 'react';
import {Segment, Icon} from 'semantic-ui-react';

const Todo = ({todo, index, completeTodo, deleteTodo}) => {
	const [isShown, setIsShown] = useState(false);
	return (
		<Segment
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
			style={{
				textDecoration: todo.isDone ? 'line-through' : '',
				textAlign: 'left',
			}}>
			{isShown ? (
				<Icon
					style={{float: 'left'}}
					color='green'
					name='check'
					onClick={() => completeTodo(index)}
				/>
			) : (
				''
			)}
			{index + 1}. {todo.text}
			{isShown ? (
				<>
					<Icon
						style={{float: 'right'}}
						color='red'
						name='delete'
						onClick={() => deleteTodo()}
					/>
				</>
			) : (
				''
			)}
		</Segment>
	);
};

export default Todo;
