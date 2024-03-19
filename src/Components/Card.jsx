import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

function Card({ todo, reference }) {
	const [isComplete, setIsComplete] = useState(false);

	const todos = {
		id: todo.id,
		todo: todo.todo,
		date: todo.date,
		time: todo.time,
		isComplete: isComplete,
	};

	return (
		<motion.div
			drag
			dragConstraints={reference}
			className="card w-96 bg-base-100 shadow-xl"
		>
			<div className="card-body">
				<h2 className="card-title flex justify-between">
					Task: {todos.id}
					<span className="text-sm font-bold text-yellow-600">
						{isComplete ? "Complete!" : "Incomplete!"}
					</span>
				</h2>
				<p className="mt-5">{todos.todo}</p>
				<div className="card-actions flex justify-between items-center mt-10">
					<div className="flex flex-col items-center gap-2">
						<h1>{todos.date}</h1>
						<h1>{todos.time}</h1>
					</div>
					<button
						onClick={() => setIsComplete(!isComplete)}
						className="btn btn-ghost py-2 px-4"
					>
						{isComplete ? "Incomplete" : "Complete"}
					</button>
				</div>
			</div>
		</motion.div>
	);
}

Card.propTypes = {
	todo: PropTypes.object,
	reference: PropTypes.object,
};

export default Card;
