function Form() {

    function cadastrarUsuario(e) {

        e.preventDefault(); // Função para não enviar para o backend.
        console.log('Cadastrou o usuário!');
    }

    return (

       <div>
           <h1>Meu cadastro:</h1>
           <form onSubmit={cadastrarUsuario}>
               <div>
                   <input type="text" placeholder="Digite o seu nome" />
               </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
           </form>
       </div> 
    );
}

export default Form;