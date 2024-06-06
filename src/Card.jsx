import frogImg1 from './assets/_7a508162-9427-4cfc-abec-a2e751804a5c.jpg'
import frogImg2 from './assets/_7a0f6c32-b7cc-44d7-b5d5-2839d503683d.jpg'
import frogImg3 from './assets/_4153d92d-5529-4e78-b184-ac63b747008f.jpg'
import Button from './Button';

import {ArtistFreedus, ArtistSkol, ArtistExplicit} from './Artists.jsx';

function Card(){

    return(
        <>
        <div className="row gap-5 justify-content-around">

        <div className="card col-3 ">
            <img className='frog' src={frogImg1} alt="profile picture" />
            <div className="card-body">
           <ArtistFreedus name ="Freedus" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem tempore quasi maiores suscipit iusto." age={26}/>
         
            <Button></Button>

            </div>
        </div>
        <div className="card col-3">
            <img className='frog' src={frogImg2} alt="profile picture" />
            <div className="card-body">
            <ArtistSkol name ="Skol" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem tempore quasi maiores suscipit iusto." age={28}/>
            <Button></Button>
            </div>
        </div>
        <div className="card col-3">
            <img className='frog' src={frogImg3} alt="profile picture" />
            <div className="card-body">
            <ArtistExplicit name ="Explicit" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem tempore quasi maiores suscipit iusto." age={22}/>
            <Button></Button>
            </div>
        </div>
        </div>
        </>
    );
}

export default Card 