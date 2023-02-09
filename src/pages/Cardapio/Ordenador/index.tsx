import classNames from 'classnames';
import React, { useState } from 'react';
import opcoes from './opcoes.json';
import styles from './Ordenador.module.scss';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface Props{
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}: Props){

    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

    return (
        <button 
            className={classNames({
                [styles.ordenador] : true,
                [styles["ordenador--ativo"]] : ordenador !== '' 
            })} 
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
        >
            <span>{nomeOrdenador || "Ordenar Por"}</span>
            {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [styles.ordenador__options] : true,
                [styles["ordenador__options--ativo"]] : aberto
            })}>
                {opcoes.map(opcoao =>(
                    <div 
                        className={styles.ordenador__option} 
                        key={opcoao.value}
                        onClick={() => setOrdenador(opcoao.value)}
                    >
                        {opcoao.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}