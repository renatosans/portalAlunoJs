import { Navbar } from './Navbar'


export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div id="panel"></div>

			<div className="w-full h-full mt-12">{children}</div>
		</>
	)
}
