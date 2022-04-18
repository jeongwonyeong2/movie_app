import React from 'react';
import PropTypes from 'prop-types';
import { url } from 'inspector';

function Movies(){
    return <h1></h1>;
}
//title,summery,images,medium_cover_image->poster
Movies.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summery:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    
};
export default Movie;