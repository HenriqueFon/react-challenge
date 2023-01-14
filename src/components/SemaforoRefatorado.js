import './Semaforo.css';

const SemaforoRefatorado = ({cor, ligado, nome, onClick}) => {
    
    return (
        <div
            onClick = {onClick}
            className = {`sinalizacao_luz${ligado ? 
                ('_ligado') 
                : ('_desligado')
                }`}
            style = {{ backgroundColor: cor }}
            >
        </div>
    )
}

export default SemaforoRefatorado;