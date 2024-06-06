
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Jumbotroon from './Jumbotroon.jsx'
import Cards from './Card.jsx'

function App() {
 

  return(
    <>
    <Header></Header>
    <div className="container">
    <Jumbotroon></Jumbotroon>
    <Cards></Cards>

    </div>
    <Footer></Footer>
    </>

  );
}

export default App
