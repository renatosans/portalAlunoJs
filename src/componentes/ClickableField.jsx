import React from 'react'
import ReactDom from 'react-dom'
import TeacherForm from './TeacherForm'


export default function ClickableField({ rowId, label, parentRef }) {

	const handleClick = () => {
        const root = ReactDom.createRoot(document.getElementById('panel'));

        const teacherForm = React.createElement(TeacherForm, { id: rowId, parentRef: parentRef }, null);
		root.render(teacherForm);
	}

	return (
		<button onClick={handleClick} style={{ color: 'darkblue', background: 'none', border: 'none' }} >
			<b><u>{label}</u></b>
		</button>
	)
}
