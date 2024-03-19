import PropTypes from "prop-types";
import { useRef } from "react";
import Card from "./Card";

function Foreground({ data }) {
	const ref = useRef(null);

	return (
		<>
			<div
				ref={ref}
				className="text-xl z-30 container pt-16 mx-auto flex gap-5 flex-wrap items-center justify-center lg:h-[90vh]"
			>
				{data &&
					data.map((todo) => (
						<Card key={todo.id} todo={todo} reference={ref} />
					))}
			</div>
		</>
	);
}

Foreground.propTypes = {
	data: PropTypes.array,
};

export default Foreground;
