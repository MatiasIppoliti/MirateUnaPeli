import React, {useState,useEffect,useRef} from 'react';

//imagenes
import searchIcon from '../../images/search-icon.svg';

//estilos
import { Wrapper, Content } from './SearchBarStyles';


const SearchBar  = ({setSearchTerm})  => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(()=> {
        if(initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return() => clearTimeout(timer)
    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img 
                    src={searchIcon} 
                    alt='search-icon' />
                <input 
                    type='text' 
                    placeholder='Buscá tu pelicula'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state} />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;