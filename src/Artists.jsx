function ArtistFreedus(props){

    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>età: {props.age}</p>
        </div>
        
    );

};

function ArtistSkol(props){

    return(
        <div>
             <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>età: {props.age}</p>
        </div>
        
    );

};

function ArtistExplicit(props){

    return(
        <div>
             <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>età: {props.age}</p>
        </div>
        
    );

};

 
 export{ArtistFreedus, ArtistSkol, ArtistExplicit};
