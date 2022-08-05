import './App.css'
import TeacherList from './componentes/TeacherList'


export default function App() {

  return (
      <>
        <header className="header">
          <img src="images\logo.png" style={{"width":"200px", "height":"200px", "margin": "50px"}} />
        </header>
        <main className="main">
          <TeacherList></TeacherList>
        </main>
        <footer className="footer">
          <div id="panel"></div>
        </footer>
      </>
  )
}
