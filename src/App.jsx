import './App.css'
import TeacherList from './componentes/TeacherList'


export default function App() {

  return (
      <>
        <header className="header">
          <div style={{ "background-image": "url('images/sala_de_aula.jpg')", "background-size": "100%"}}>
            <img src="images\logo.png" style={{"width":"200px", "height":"200px", "margin": "50px"}} />
          </div>
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
