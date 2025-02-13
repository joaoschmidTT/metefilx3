import { useNavigate } from 'react-router-dom';

export default function BotaoLogin(props) {     
    const navigate = useNavigate();                                  

    return (
        <button 
            id="botao1" 
            onClick={() => {                       
                let login = document.querySelector("#inputLogin").value;
                let password = document.querySelector("#inputPassword").value;

                if (login === "joao" && password === "123456") { 
                    navigate('/catalogofilme'); // Certifique-se de que está exatamente assim!
                }
            }}
        >
            Entrar {props.button}
        </button>
    );
}
