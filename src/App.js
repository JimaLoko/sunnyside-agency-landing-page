import GlobalStyle from "./styles/globalStyles";

import Header from "./Home/Header"
import Main from "./Home/Main";
import ClientTestimonials from "./Home/ClientTestimonials";
import Galery from "./Home/Galery";
import Footer from "./Home/Footer";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <ClientTestimonials/>
    <Galery/>
    <Footer/>
    </>
  );
}

export default App;
