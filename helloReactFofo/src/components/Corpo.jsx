import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("Tá funcionandooooo!!")
    }
    return(
        <div className="container-corpo">

            <h1>Desbravando o React</h1>
            <p>Vamos começar a nossa aventura!</p>
            <button onClick={alertarUsuario}>Alerta</button>
            <img className='imagem' src="./react.png" alt="" />
            6 x 6 = {6*6}
        </div>
    
    )
}

export default Corpo;