import './App.css'
import TeacherList from './componentes/TeacherList'


export default function App() {

  return (
    <div style={{ "background-image": "url('images/sala_de_aula.jpg')", "background-size": "100%"}}>
        <header className="header">      
            <img src="images\logo.png" style={{"width":"400px", "height":"400px", "padding": "50px"}} />
        </header>
        <main className="main">
            <TeacherList></TeacherList>
        </main>
        <footer className="footer">
            <div id="panel"></div>
        </footer>
    </div>
  )
}
