import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from './data'



function App() {

const cards = data.map(item => {
    return (
      <Main 
      key={item.id}
      item={item}
      />
    )
  })
  return (
   <div className="container">
    <Navbar />
    <section>
    {cards}
    </section>
   </div>
  );
}

export default App;
