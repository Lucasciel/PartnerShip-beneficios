import './App.css'

//Componentes:


function App() {


  return (
    <>
   <header>
    <img src="ImagemBeneficios/logo.svg" alt="Logo" />
    <ul>
        <li><a href="">Quem somos</a></li>
        <li><a href="">Benefícios do Programa</a></li>
        <li><a href="">conheça nossos parceiros</a></li>
        <li>
          <select name="oi" id="">
            <option value="">Area de Login</option>
            <option value="">Profissional</option>
            <option value="">Consultor</option>
            <option value="">Loja</option>
        </select>
        </li>
    </ul>
   </header>

    <section>
      <div id='titulo-beneficio'>
        <h1>BENEFÍCIOS DO PROGRAMA</h1>
        <div id='linha'></div>
        <h1>PREMIAÇÃO</h1>
      </div>
      
      <ul>
        <li>VIAGENS (Nacionais e internacionais)</li>
        <li>CRUZEIROS</li>
        <li>Workshops</li>
        <li>Acelera Partnership</li>
        <li>Promoções internas One House <br />
        ambientes e Grupo Maxi</li>
      </ul>
    <p>*O resgate das viagens deverá ser solicitado no prazo máximo de 
    120 dias antes do período escolhido.</p>
    </section>

    <div id='secao-premiacao'>
      <div id='titulo-premiacao'>
        <h2>ACELERA PARTNERSHIP</h2>
      </div>
      <p>São premiações que poderão ocorrer durante o andamento <br />
da campanha PARTNERSHIP vigente, acelerando ainda mais <br />
a sua chance de viver experiências fantásticas com resgate <br />
imediato, e o melhor, sem que seja descontado qualquer <br />
ponto da sua jornada dentro do programa.</p>

      <ul>
        <li>DAY SPAs</li>
        <li>Experiência gastronômica em restaurante
        e/ou chefes renomados;</li>
        <li>Iphones</li>
        <li>Jet Ski</li>
      </ul>
      <div id='container-image-premiacao'>
        <img src="ImagemBeneficios/celular.svg" alt="" />
        <img src="ImagemBeneficios/spa.svg" alt="" />
        <img src="ImagemBeneficios/lancha.svg" alt="" />
      </div>
    </div>

    </>
  )
}

export default App
