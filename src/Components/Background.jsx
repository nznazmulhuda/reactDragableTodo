import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Background({ handleInputTodos }) {
	const [value, setValue] = useState("");
	const refer = useRef();

	return (
		<>
			<div ref={refer} className="w-full">
				<motion.div
					drag
					dragConstraints={refer}
					className="flex items-center justify-center lg:w-1/2 pt-10 gap-5"
				>
					<input
						className="border rounded-xl border-zinc-800 w-1/2 outline-none bg-transparent p-3 pl-5"
						type="text"
						placeholder="Enter your todays todo"
						onChange={(e) => setValue(e.target.value)}
					/>
					<button
						onClick={() => handleInputTodos(value)}
						className="border py-3 rounded-xl px-4 border-zinc-800  hover:text-zinc-300 hover:bg-zinc-800"
					>
						Add
					</button>
				</motion.div>

				<div className="divider container mx-auto"></div>
				<h1 className="text-9xl fixed z-0 font-mono leading-tight tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-zinc-900">
					Docs.
				</h1>
			</div>
		</>
	);
}

Background.propTypes = {
	handleInputTodos: PropTypes.func,
};

export default Background;
