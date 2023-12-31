import Contatos from "./components/Contatos"
import CustomInput from "./components/CustomInput/CustomInput"
import Hero from "./components/Hero"
import Projetos from "./components/Projetos"
import Sobre from "./components/Sobre"
import Tecnologias from "./components/Tecnologias"

export default function Home() {
  return (
    <main>
      <Hero/>
      <Sobre/>
      <Tecnologias/>
      <Projetos/>
      <Contatos/>
    </main>
  )
}
