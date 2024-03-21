import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { FaBarsProgress } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";

function Todo({
	handleAddButton,
	handleAddIssue,
	add,
	issues,
	handleAddToProgress,
	handleAddToDone,
}) {
	return (
		<>
			<div className="bg-zinc-900 rounded-xl px-3 py-3">
				<div className="flex gap-3 items-center justify-between">
					<h1 className="text-xs flex gap-2 items-center font-bold tracking-tighter leading-none">
						TO DO
					</h1>

					<h5 className="text-yellow-500">
						<LuListTodo size={15} />
					</h5>
				</div>

				<div className="mt-3 space-y-1">
					{issues.map((issue, id) => (
						<div key={id} className="bg-zinc-800 rounded-[7px]">
							<h1 className="py-1 px-2 text-sm font-semibold tracking-tight leading-6 whitespace-pre-wrap">
								{issue}
							</h1>

							<div className="flex justify-between px-3 py-2 text-sm tracking-tighter text-yellow-500">
								<button
									onClick={() => handleAddToProgress(issue)}
								>
									<FaBarsProgress />
								</button>
								<button
									onClick={() => handleAddToDone(issue)}
									className="text-green-500"
								>
									<IoMdDoneAll />
								</button>
							</div>
						</div>
					))}
				</div>

				<div>
					<button
						onClick={() => handleAddButton(true)}
						className={`btn w-full ${
							add && "hidden"
						} justify-start bg-transparent mt-1`}
					>
						<FaPlus />
						Create issue
					</button>

					{add && (
						<form
							onSubmit={handleAddIssue}
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
										onClick={() => handleAddButton(false)}
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

Todo.propTypes = {
	handleAddButton: PropTypes.func,
	handleAddIssue: PropTypes.func,
	handleAddToProgress: PropTypes.func,
	handleAddToDone: PropTypes.func,
	add: PropTypes.bool,
	issues: PropTypes.array,
};

export default Todo;
