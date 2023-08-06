import data from './data'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
// css
import './app.css'

function App() {
  const cards = data.map(item => {
    return (
      <MainContent 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="main-content">
        {cards}
      </section>
    </div>
  );
}

export default App;
