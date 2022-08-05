import './App.css'
import TeacherList from './componentes/TeacherList'


export default function App() {

  return (
      <>
        <header className="header">
          <div id="panel"></div>
        </header>
        <main className="main">
          <TeacherList></TeacherList>
        </main>
        <footer className="footer">
          <div id="bottom-content"></div>
        </footer>
      </>
  )
}
