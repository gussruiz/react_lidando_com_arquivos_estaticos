import styles from './Filtros.module.scss';
import filtros from './filtros.json';
export default function Filtros(){

    type opcao = typeof filtros[0];

    function selecionarFiltro(opcao: opcao) {
        
    }

    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) =>(
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}