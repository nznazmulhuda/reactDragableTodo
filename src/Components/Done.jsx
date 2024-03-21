import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { IoMdDoneAll } from "react-icons/io";

function Done({
	doneIssues,
	handleAddToProgress,
	handleAddDoneIssue,
	addDone,
	handleShowDoneField,
	handleToDo,
}) {
	return (
		<>
			<div className="bg-zinc-900 rounded-xl px-3 py-3">
				<div className="flex gap-3 items-center justify-between">
					<h1 className="text-xs flex gap-2 items-center font-bold tracking-tighter leading-none">
						DONE
					</h1>

					<h5 className="text-green-500">
						<IoMdDoneAll size={15} />
					</h5>
				</div>

				<div className="mt-3 space-y-1">
					{doneIssues.map((issue, id) => (
						<div key={id} className="bg-zinc-800 rounded-[7px]">
							<h1 className="py-1 px-2 text-sm font-semibold tracking-tight leading-6 whitespace-pre-wrap line-through">
								{issue}
							</h1>

							<div className="flex justify-between px-3 py-2 text-sm tracking-tighter text-yellow-500">
								<button
									onClick={() => handleAddToProgress(issue)}
								>
									<FaBarsProgress />
								</button>
								<button
									onClick={() => handleToDo(issue)}
									className="text-yellow-500"
								>
									<LuListTodo />
								</button>
							</div>
						</div>
					))}
				</div>

				<div>
					<button
						onClick={() => handleShowDoneField(true)}
						className={`btn w-full ${
							addDone && "hidden"
						} justify-start bg-transparent mt-1`}
					>
						<FaPlus />
						Create issue
					</button>

					{addDone && (
						<form
							onSubmit={handleAddDoneIssue}
							className="flex justify-evenly flex-col items-center mt-1 overflow-hidden w-full"
						>
							<div className="w-full relative border rounded-lg">
								<textarea
									type="text"
									name="issue"
									className="bg-transparent py-2 px-3 w-[95%] text-sm placeholder:text-xs outline-none whitespace-pre-wrap resize-none"
									placeholder="Write your issue"
									autoFocus
								/>
								<div className="absolute top-1 right-1">
									<button
										onClick={() =>
											handleShowDoneField(false)
										}
									>
										<MdOutlineCancel />
									</button>
								</div>
							</div>
							<button
								type="submit"
								className="text-sm mt-2 bg-yellow-600 w-full rounded-lg text-white font-bold py-1"
							>
								Add
							</button>
						</form>
					)}
				</div>
			</div>
		</>
	);
}

Done.propTypes = {
	handleAddDoneIssue: PropTypes.func,
	handleAddToProgress: PropTypes.func,
	handleShowDoneField: PropTypes.func,
	handleToDo: PropTypes.func,
	addDone: PropTypes.bool,
	doneIssues: PropTypes.array,
};

export default Done;
