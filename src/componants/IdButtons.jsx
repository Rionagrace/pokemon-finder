import { useState } from "react";

function IdButtons(props) {
	const { setNewId } = props;

	function changeId(event) {
    setNewId(event.target.id)
	}

	return (
		<>
		<section className="buttons">
			<button className="button" id="1" onClick={changeId}>I</button>
			<button className="button" id="2" onClick={changeId}>II</button>
			<button className="button" id="3" onClick={changeId}>III</button>
			<button className="button" id="4" onClick={changeId}>IV</button>
			<button className="button" id="5" onClick={changeId}>V</button>
			<button className="button" id="6" onClick={changeId}>VI</button>
			<button className="button" id="7" onClick={changeId}>VII</button>
			<button className="button" id="8" onClick={changeId}>VIII</button>
			<button className="button" id="9" onClick={changeId}>IX</button>
			</section>
		</>
	);
}

export default IdButtons;
