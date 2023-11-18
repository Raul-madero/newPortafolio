import '../Sass/app.scss';
import Header from './component/Header';
import Hero from './component/Hero';
import Resumen from './component/Resumen';
import Tecnologias from './component/Tecnologias';
import Proyectos from './component/Proyectos';
import Footer from './component/Footer';

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Resumen />
        <Tecnologias />
        <Proyectos />
        <Footer />
        <script src="https://kit.fontawesome.com/89daf2435a.js" crossOrigin="anonymous" async></script>
    </>
  )
}
