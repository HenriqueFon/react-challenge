import SemaforoRefatorado from "./SemaforoRefatorado";
import { useState } from "react";

export const Sinalizacao = ({ cores = []}) => {
    const [colorAtual, setColorAtual] = useState('');
    
    return (
        <div class="body-semaoforo">
            {cores.map(({cor, nome}) => 
                <SemaforoRefatorado 
                    key = {cor}
                    cor = {cor}
                    nome = {nome}
                    ligado = {cor == colorAtual}
                    onClick ={() => setColorAtual(cor)}
                />
            )}
        </div>
    )
}