import { useCallback, useEffect, useState } from "react";
import Todo from "./Todo";
import Progress from "./Progress";
import Done from "./Done";

function Todos() {
	const [add, setAdd] = useState(false);
	const [addPro, setAddPro] = useState(false);
	const [addDone, setAddDone] = useState(false);

	const [issues, setIssues] = useState(
		JSON.parse(localStorage.getItem("issues"))?.todo?.length > 0
			? JSON.parse(localStorage.getItem("issues")).todo
			: []
	);
	const [progressIssue, setProgressIssue] = useState(
		JSON.parse(localStorage.getItem("issues"))?.progressIssue?.length > 0
			? JSON.parse(localStorage.getItem("issues")).progressIssue
			: []
	);
	const [doneIssues, setDoneIssues] = useState(
		JSON.parse(localStorage.getItem("issues"))?.doneIssues?.length > 0
			? JSON.parse(localStorage.getItem("issues")).doneIssues
			: []
	);

	// Add an issue
	const handleAddIssue = async (e) => {
		e.preventDefault();
		const lines = e.target.issue.value
			.split("\n")
			.filter((line) => line.trim() !== "");
		const issue = lines.join("\n");

		e.target.issue.value
			? (setIssues([...issues, `${issue}`]), setAdd(false))
			: alert("Input an issue");
		issues && hold();
	};

	// Add to progress bar
	const handleProgress = (e) => {
		e.preventDefault();
		const lines = e.target.issue.value
			.split("\n")
			.filter((line) => line.trim() !== "");
		const issue = lines.join("\n");

		e.target.issue.value
			? (setProgressIssue([...progressIssue, `${issue}`]),
			  setAddPro(false))
			: alert("Input an issue");
		hold();
	};

	// Add done issue
	const handleAddDoneIssue = (e) => {
		e.preventDefault();
		const lines = e.target.issue.value
			.split("\n")
			.filter((line) => line.trim() !== "");
		const issue = lines.join("\n");

		e.target.issue.value
			? (setDoneIssues([...doneIssues, `${issue}`]), setAddDone(false))
			: alert("Input an issue");
		hold();
	};

	// Add to TODO bar
	const handleToDo = (issue) => {
		setIssues([...issues, issue]);
		setDoneIssues(doneIssues.filter((don) => don !== issue));
		setProgressIssue(progressIssue.filter((pro) => pro !== issue));
	};

	// Add to Progress bar
	const handleAddToProgress = (issue) => {
		setIssues(issues.filter((is) => is !== issue));
		setDoneIssues(doneIssues.filter((iss) => iss !== issue));
		setProgressIssue([...progressIssue, issue]);
	};

	// Add to done bar
	const handleAddToDone = (issue) => {
		setIssues(issues.filter((is) => is !== issue));
		setProgressIssue(progressIssue.filter((iss) => iss !== issue));
		setDoneIssues([...doneIssues, issue]);
	};

	// Hide and Visible Creat issue and issue field
	const handleAddButton = (b) => {
		setAdd(b);
	};

	// Hide and Visible Creat issue and issue field
	const handleAddButtonPro = (b) => {
		setAddPro(b);
	};

	// Show done field
	const handleShowDoneField = (b) => {
		setAddDone(b);
	};

	const hold = useEffect(() => {
		localStorage.setItem(
			"issues",
			JSON.stringify({
				todo: issues,
				progressIssue: progressIssue,
				doneIssues: doneIssues,
			})
		);
		console.log("add");
	}, [issues, progressIssue, doneIssues]);

	return (
		<>
			<div className="container mx-auto flex justify-center lg:justify-between flex-col lg:flex-row items-center gap-3 mt-20">
				<div className="w-full lg:w-[33%]">
					<Todo
						handleAddButton={handleAddButton}
						handleAddIssue={handleAddIssue}
						handleAddToProgress={handleAddToProgress}
						handleAddToDone={handleAddToDone}
						add={add}
						issues={issues}
					/>
				</div>

				<div className="w-full lg:w-[33%]">
					<Progress
						handleToDo={handleToDo}
						handleAddButtonPro={handleAddButtonPro}
						handleProgress={handleProgress}
						handleAddToDone={handleAddToDone}
						progressIssue={progressIssue}
						addPro={addPro}
					/>
				</div>

				<div className="w-full lg:w-[33%]">
					<Done
						doneIssues={doneIssues}
						handleAddToProgress={handleAddToProgress}
						handleAddDoneIssue={handleAddDoneIssue}
						addDone={addDone}
						handleAddToDone={handleAddToDone}
						handleShowDoneField={handleShowDoneField}
						handleToDo={handleToDo}
					/>
				</div>
			</div>
		</>
	);
}

export default Todos;
