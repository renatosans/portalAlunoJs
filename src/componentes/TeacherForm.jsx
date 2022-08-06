import axios from 'axios'
import { Dialog } from '@mui/material'
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { notification } from '../config/defaults'


export default function TeacherForm({id, parentRef}) {
	const [open, setOpen] = useState(true);

	const close = () => {
		setOpen(false);
	}

	const [professor, setProfessor] = useState({
        "nome": "",
        "email": "",
        "foto": "",
        "formatoImagem": ""
	})

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (professor.nome === "" || professor.email === "" || professor.foto === "") {
			toast.error('Alguns campos obrigatórios não foram preenchidos!', notification.options);
			return;
		}

		try {
			if (id === undefined) {
				await axios.post("/api/routes/professores", {
					...professor,
				})
			} else {
				await axios.put("/api/routes/professores/" + id, {
					...professor,
				})
			}
		} catch (error) {
			toast.error(error.message, notification.options);
			return;
		}

		toast.success('Registro salvo com sucesso', notification.options);
		parentRef.getProfessores(); // Refresh da lista de professores
		close();
	}

	const onChange = (e) => {
		setProfessor({
			...professor,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		const getProfessor = async (id) => {
			const { data: professor } = await axios.get("/api/routes/professores/" + id);
			setProfessor(professor);
		};

		if (id !== undefined) getProfessor(id);
	}, []);

	return (
	<>
		<Toaster />

		<Dialog open={open} onClose={close} >
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label htmlFor="nome" className="block text-gray-700 text-sm font-bold md-2">
						Nome
					</label>
					<input type="text"
						name="nome"
						value={clube.nome}
						className="shadow appearance  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={onChange}
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 text-sm font-bold md-2">
						E-mail
					</label>
					<input type="text"
						name="email"
						value={clube.email}
						className="shadow appearance  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={onChange}
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="foto" className="block text-gray-700 text-sm font-bold md-2">
						Foto
					</label>
					<textarea
						name="foto"
						value={clube.foto}
						className="shadow appearance  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						onChange={onChange} >
					</textarea>
				</div>
				<input type="hidden" name="formatoImagem" value={clube.formatoImagem} onChange={onChange} />

				<button type="submit" className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white font-bold">
					Salvar
				</button>
			</form>
		</Dialog>
	</>
	)
}
