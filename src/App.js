import { useState } from 'react'
import './app.css'

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');


  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMensagem("Seu IMC foi " + imc.toFixed(1) + ", Você está abaixo do peso")
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Seu IMC foi " + imc.toFixed(1) + ", Você está com o peso ideal")
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("Seu IMC foi " + imc.toFixed(1) + ", Você está levemente acima do peso")
    }else if(imc >= 34.9){
      setMensagem("Seu IMC foi " + imc.toFixed(1) + ", Cuidado! você está com obesidade")
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (Kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Altura em (Cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>

    </div>
  )
}