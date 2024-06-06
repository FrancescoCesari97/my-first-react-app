import PropTypes from 'prop-types'




   export const artists = [
        {
            id: 1,
            name:"Freedus",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem tempore quasi maiores suscipit iusto.", 
            age: 26,
            image: '../public/_7a508162-9427-4cfc-abec-a2e751804a5c.jpg'
        },
        {
            id: 2,
            name:"Skol",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem tempore quasi maiores suscipit iusto.", 
            age: 28,
            image: '../public/_7a0f6c32-b7cc-44d7-b5d5-2839d503683d.jpg'
        },
        {
            id: 3,
            name:"Explicit",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem tempore quasi maiores suscipit iusto.", 
            age: 22,
            image: '../public/_4153d92d-5529-4e78-b184-ac63b747008f.jpg'
        },
    ]

    export function Artist({ name, description, age }) {
        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Age: {age}</p>
            </div>
        );
    }


// ArtistFreedus.propTypes = {
//     name: PropTypes.string,
//     description: PropTypes.string,
//     age: PropTypes.number
// }



// function ArtistSkol(props){

//     return(
//         <div>
//              <h2>{props.name}</h2>
//             <p>{props.description}</p>
//             <p>età: {props.age}</p>
//         </div>
        
//     );

// };
// ArtistSkol.propTypes = {
//     name: PropTypes.string,
//     description: PropTypes.string,
//     age: PropTypes.number
// }



// function ArtistExplicit(props){

//     return(
//         <div>
//              <h2>{props.name}</h2>
//             <p>{props.description}</p>
//             <p>età: {props.age}</p>
//         </div>
        
//     );

// };
// ArtistExplicit.propTypes = {
//     name: PropTypes.string,
//     description: PropTypes.string,
//     age: PropTypes.number
// }

 
//  export{ArtistFreedus, ArtistSkol, ArtistExplicit};
