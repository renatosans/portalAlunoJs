import { Layout } from '../componentes/Layout'
import TeacherList from '../componentes/TeacherList'


export default function Home() {
return (
    <Layout>
        <div style={{ "background-image": "url('images/sala_de_aula.jpg')", "background-size": "100%"}}>
            <img className="w-60 h-60 p-8" src="images/logo.png" />
            <TeacherList></TeacherList>
        </div>
    </Layout>
)
}
