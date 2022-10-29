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
		<button className="text-[#5577FF] bg-transparent border-0" onClick={handleClick} >
			<b><u>{label}</u></b>
		</button>
	)
}
