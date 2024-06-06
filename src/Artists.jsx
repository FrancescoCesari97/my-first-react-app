import PropTypes from 'prop-types'

function ArtistFreedus(props){

    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>età: {props.age}</p>
        </div>
        
    );

};
ArtistFreedus.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.number
}



function ArtistSkol(props){

    return(
        <div>
             <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>età: {props.age}</p>
        </div>
        
    );

};
ArtistSkol.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.number
}



function ArtistExplicit(props){

    return(
        <div>
             <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>età: {props.age}</p>
        </div>
        
    );

};
ArtistExplicit.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    age: PropTypes.number
}

 
 export{ArtistFreedus, ArtistSkol, ArtistExplicit};
