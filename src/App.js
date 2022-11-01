import './App.css';

function App() {
  return (
  <div clasName="container flex">
    <header>
      <p>React JS</p>
    </header>

    <main >
      <section className="first-section">
        <h2>React JS</h2>
        <p>Biblioteca JavaScript para criar SPAs</p>
        <a href="https://reactjs.org/" target="blank">Site Oficial</a>
      </section>
      <section className="second-section">
        <h2>Requisitos</h2>
        <p><strong>Veja abaixo os requisitos mínimos para aprender React JS:</strong></p>
        <div className="flex">
          <div className="cards flex">
            <h3>HTML</h3>
            <p>Aprender a estruturar os elementos da página com HTML</p>
          </div>
          <div className="cards flex">
            <h3>CSS</h3>
            <p>Aprender a estilizar os elementos da página com CSS</p>
          </div>
          <div className="cards flex">
            <h3>JavaScript</h3>
            <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="footer-row flex">
        <div>
          <p>Criado por <strong>Paulo Alexandre</strong></p>
        </div>
        <div className="column"></div>
        <div className="social flex">
            <a className="LI style" href="https://www.linkedin.com/in/paulo-alexandre-1aa395231/" target="_blank">LinkedIn</a>
            <a className="GH style" href="https://github.com/Chapalin" target="_blank" >Git Hub</a>
        </div>
      </div>
    </footer>
   </div>
  );
}

export default App;
