import Head from "next/head";
import Image from "next/image";

import NavTop from "../components/NavTop";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import CarouselItem from "../components/CarouselItem";
import Search from "../components/Search";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Conecta ONGs</title>
        <meta
          name="description"
          content="Marketing e Comunicação para o Terceiro Setor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTop />
      <Header />
      <section className="sectionList">
        <div className="container">
          <div className="row">
            <SectionTitle
              title="Engaje-se hoje mesmo :)"
              description="Tem muitas ONGs por aqui precisando de uma ajudinha pra transformar o mundo! Que tal se engajar com uma delas?"
            />
            <CarouselItem />
          </div>
        </div>
      </section>
      <section className="sectionSearch">
        <div className="container">
          <div className="row">
            <SectionTitle
              isDark={true}
              title="Encontre sua causa \o/"
              description="Nada melhor do que se enjadar com uma causa que se identificamos, não é mesmo? Aqui você pesquisa pela sua causa do coração :)"
            />
            <Search />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
