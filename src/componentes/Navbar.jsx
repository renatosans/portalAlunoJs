import '../App.css'


export const Navbar = () => {
return (
	<nav className="navbar">
		<ul className="list-none flex flex-row">
			<li className="navitem text-[#F2F2F2] hover:text-black hover:bg-[#DDD]" ><a href="/">Home</a></li>
			<li className="navitem text-[#F2F2F2] hover:text-black hover:bg-[#DDD]" ><a href="/students">Alunos</a></li>
			<li className="navitem text-[#F2F2F2] hover:text-black hover:bg-[#DDD]" ><a href="/teachers">Professores</a></li>
		</ul>
	</nav>
)
}
