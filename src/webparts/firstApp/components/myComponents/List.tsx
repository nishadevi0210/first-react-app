import * as React from "react";
import styles from './../FirstApp.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const List = () => {
	//const [state, setstate] = useState({data:""})
	const [notesList, setList] = React.useState([]);
	const [textArea, setTextArea] = React.useState("");
	const addNew = () => {
		setTextArea("");
	}

	const changeTextArea = (event) => {
		setTextArea(event.target.value);
	}

	const saveNote = () => {
		if (textArea !== "") {
			let index = notesList.indexOf(textArea);
			if (index !== -1) {
				alert("note already exists");
			} else {
				setList(notesList.concat(textArea));
				addNew();
			}
		} else { 
			alert("empty note cannot be saved");
		}
	}

	return(
	<div>
		<div className="notes-list">
			<ul className="list-group" id="list">
			{
				notesList.map((item) => (
					<ListItem key={item} val={item} />
				))
			}
			</ul>
		</div>
		<div>
			<div className={`${styles["notes-text"]}`}>
				<textarea name="textarea" value={textArea} onChange={changeTextArea} placeholder="Write here..." id="textArea" className={`${styles.textarea}`}></textarea>
                <button type="button" className="btn btn-primary" id={`${styles.add}`} onClick={addNew}>Clear</button>
				<button type="button" className="btn btn-success" id={`${styles.done}`} onClick={saveNote}>Add</button>
			</div>
		</div>
	</div>
	);
}

const ListItem = (props) => {
	console.log("here", props);
	return(
		<li className="list-group-item-success" id="note'+i+'"> {props.val} ....
			<button type="button" className={`btn btn-danger btn-sm ${styles["btn-del"]}`}>Delete</button>
		</li>
	);
}


/*function deleteNote() {
    console.log("chal pda");
    var num = $(this).attr("noteId");
            notesList.splice(num, 1);
            createList(notesList);
} 

function addHover() {
    console.log("hover is on");
    document.getElementById("list").style.color = "#ff00ff";
}

function removeHover() {
    console.log("hover is off");
    document.getElementById("list").style.color = "#155724";
}*/

