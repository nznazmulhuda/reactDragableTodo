import { useEffect, useState } from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

function App() {
	const [data, setData] = useState([]);
	const [id, setId] = useState(1);

	const date = new Date();
	const day = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const handleInputTodos = (value) => {
		if (value) {
			setId(id + 1);
			setData([
				...data,
				{
					id: id,
					todo: value,
					date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${
						day[date.getUTCDay()]
					}`,
					time: `${date.toLocaleString("en-US", {
						hour: "numeric",
						minute: "numeric",
						hour12: true,
					})}`,
				},
			]);

			localStorage.setItem(
				"todo",
				JSON.stringify([
					...data,
					{
						id: id,
						todo: value,
						date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${
							day[date.getUTCDay()]
						}`,
						time: `${date.toLocaleString("en-US", {
							hour: "numeric",
							minute: "numeric",
							hour12: true,
						})}`,
					},
				])
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
