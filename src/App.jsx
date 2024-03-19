import { useEffect, useState } from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

function App() {
	const [data, setData] = useState([]);
	const [id, setId] = useState(1);

	const handleInputTodos = (value) => {
		if (value) {
			setId(id + 1);
			setData([...data, { id: id, todo: value }]);
			localStorage.setItem(
				"todo",
				JSON.stringify([...data, { id: id, todo: value }])
			);
		}
	};

	useEffect(() => {
		JSON.parse(localStorage.getItem("todo")) &&
			(setData(JSON.parse(localStorage.getItem("todo"))),
			setId(JSON.parse(localStorage.getItem("todo")).length + 1));
	}, []);

	return (
		<>
			<Background handleInputTodos={handleInputTodos} />
			<Foreground data={data} />
		</>
	);
}

export default App;
