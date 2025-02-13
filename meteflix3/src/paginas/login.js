import Input1 from "../components/input1";
import Input2 from "../components/input2";
import BotaoLogin from "../components/botaologin";
import './login.css'




export default function Login() {
    return (
        <div className="container">
            <h1>METEFLIX</h1>
            <div id="telaprincipal">
                <p>Usuário</p>
                <Input1 id="inputLogin"/>
                <p>Senha</p>
                <Input2 id="inputPassword"/>
                <BotaoLogin/>
            </div>
        </div>
    );
}
