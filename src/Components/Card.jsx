import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

function Card({ todo, reference }) {
	const [isComplete, setIsComplete] = useState(false);

	const todos = {
		id: todo.id,
		todo: todo.todo,
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
				<div className="card-actions justify-end mt-10">
					<button
						onClick={() => setIsComplete(true)}
						className="btn btn-ghost py-2 px-4"
					>
						Complete
					</button>
					<button
						onClick={() => setIsComplete(false)}
						className="btn btn-ghost py-2 px-4"
					>
						Incomplete
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
