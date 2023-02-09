import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import React from 'react';
import classNames from 'classnames';

interface Props{
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props){
    type opcao = typeof filtros[0];
    
    function selecionarFiltro(opcao: opcao) {
        if(filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
    }


    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) =>(
                <button 
                    className={classNames({
                        [styles.filtros__filtro] : true,
                        [styles['filtros__filtro--ativo']] : filtro === opcao.id
                    })}
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}