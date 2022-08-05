import axios from 'axios';
import ReactDom from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import toast, { Toaster } from "react-hot-toast";
import { notification } from '../config/defaults'
import TeacherForm from './TeacherForm';
import ClickableField from './ClickableField';
import ConfirmationDialog from './ConfirmationDialog';


export default function TeacherList() {

	const [professores, setProfessores] = useState([]);

	const getProfessores = async () => {
	  const { data: professores } = await axios.get('/api/routes/professores')
	  setProfessores(professores)
	}

	useEffect(() => {
	  getProfessores();
	}, []);

    const columns = [
		{ field: 'id', headerName: 'id', width: 80 },
		{ field: 'nome', headerName: 'Nome', width: 160, renderCell: (params) => 
			<ClickableField rowId={params.row.id} label={params.row.nome} parentRef={{ getProfessores }}></ClickableField> },
		{ field: 'email', headerName: 'E-mail', width: 160 },
		{ field: 'foto', headerName: 'Foto', width: 200 }
	]

	function insertTeacher() {
        const root = ReactDom.createRoot(document.getElementById('panel'));

        const teacherForm = React.createElement(TeacherForm, {id: null, parentRef: { getProfessores } }, null);
		root.render(teacherForm);
	}

	function deleteTeacher() {
		const root = ReactDom.createRoot(document.getElementById('panel'));

		if (selectionModel.length < 1){
            toast.error("Favor selecionar os registros para exclusão.", notification.options);
            return;
		}

		const message = 'Deseja realmente excluir estes registros ?';
        const confirmationDialog = React.createElement(ConfirmationDialog, {message, handleResult}, null);
		root.render(confirmationDialog);
	}

	const handleResult = (result) => {
        // apos confirmação exlcui os registros
		if (result) {
			const promises = selectionModel.map(async (id) => { await axios.delete(`/api/routes/professores/${id}`) } );
			Promise.all(promises)
				.then(() => { getProfessores() } )  // Refresh da lista de professores
				.catch((error) => { toast.error(error.message) })
		}		
	}

	const [selectionModel, setSelectionModel] = useState([]);

	return (
		<>
            <Toaster />

			<Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteTeacher} >Excluir</Button>
			<Button variant="outlined" startIcon={<AddCircleIcon />} onClick={insertTeacher} >Novo</Button>

			<DataGrid columns={columns} rows={professores} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection
                onSelectionModelChange={setSelectionModel} selectionModel={selectionModel} />
		</>
	)
}
