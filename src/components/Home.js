import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';

//image
import noImage from '../images/no_image.jpg';

//custom Hooks (siempre ponerles "use" delante del nombre)
import { useHomeFetch } from '../hooks/useHomeFetch'

const Home = () => {
    
    const {state, error, searchTerm ,setSearchTerm, setIsLoadingMore} = useHomeFetch();
    console.log(state);

    if (error) return <div>Algo salió mal.. Intente nuevamente</div>;

    return (
        <>
            {state.results[0] ?
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].title}
                text={state.results[0].overview}
            /> 
            : null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'Resultados de la Búsqueda' : 'Películas Más Populares'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : noImage }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
                <Button callback={() => setIsLoadingMore(true)}/>
        </>
    );
};

export default Home;