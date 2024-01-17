import Layout from "@/components/layout";
import useAppData from '../data/hook/useAppData'

export default function Home() {
    const dados = useAppData()
  return (
      <div className={''}>
          <Layout subtitulo={"Sub Titulo"} titulo={"Titulo"}>
              <h3>Conteudo e meu zovo</h3>
              <h4>{dados.nome}</h4>
          </Layout>
      </div>

  )
}
