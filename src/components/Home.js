import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"

function Home () {
    return (
        <div>
            <div>
                <h5 id="name">laurenmirallessnow</h5>
            </div>
            <div className="home-pics-div">
                <div>
                    <div className="home-pics-subdiv">
                        <Link id="selfpres" to="/selfpres"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723771/lms%20selfpres/selfpres12_gl9yqi.jpg" alt="" /></Link>
                        <Link id="selfpres" to="/selfpres"><p className="home-text">Major Van Winkle - Selfish Presley EP</p></Link>
                    </div>
                    
                    <div className="home-pics-subdiv">
                        <Link id="soundslike" to="/soundslike"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723806/lms%20sounds%20like/soundslike18_vvdghe.jpg" alt="" /></Link>
                        <Link id="soundslike" to="/soundslike"><p className="home-text">Great Time - "Sounds Like ____" EP Release</p></Link>
                    </div>

                    <div id="spliffbreak-vid-div">
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://www.youtube.com/watch?v=UMD1PTFbH4g&ab_channel=ChrisLorenzo'
                            width='100%'
                            height='100%'
                            controls={true}
                            />
                        </div>
                    </div>

                    <div className="home-pics-subdiv">
                        <Link id="rubber-cityhall" to="/rubbercityhall"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723613/lms%20rubber%20city%20hall/rubbercityhall2_g6yh4k.jpg" alt="" /></Link>
                        <Link id="rubber-cityhall" to="/rubbercityhall"><p className="home-text">Rubber Live at City Hall</p></Link>
                    </div>
                    
                    <div className="home-pics-subdiv">
                        <Link id="misc" to="/misc"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723581/lms%20misc/misc8_hrclnj.jpg" alt="" /></Link>
                        <Link id="misc" to="/misc"><p className="home-text">misc</p></Link>
                    </div>
                        
                    <div className="home-pics-subdiv">
                        <Link id="rubberandfriends" to="/rubberandfriends"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723654/lms%20rubber%20w%20friends/rubberwfriends13_czh2oh.jpg" alt="" /></Link>
                        <Link id="rubberandfriends" to="/rubberandfriends"><p className="home-text">Rubber with Suzzanne Sheer, Taylor Kelly, and CJ Mills</p></Link>
                    </div>
                        
                    <div className="home-pics-subdiv">
                        <Link id="rubberwcl" to="/rubberwcl"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723712/lms%20rubber%20wcl/rubberwcl1_j1k0de.jpg" alt="" /></Link>
                        <Link id="rubberwcl" to="/rubberwcl"><p className="home-text">misc</p></Link>
                    </div>
                        
                    <div><Link id="fam" to="/fam"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723474/lms%20fam/fam3_shmux3.jpg" alt="" /></Link></div>
                    <div><Link id="livestream" to="/livestream"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723545/lms%20livestream/livestream4_gnllli.jpg" alt="" /></Link></div>
                    <div><Link id="rubberwawa" to="/rubberwawa"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633723683/rubber%20wawa/rubberwawa15_k9cnrh.jpg" alt="" /></Link></div>
                    {/* <div><img className="home-pics" src="" alt="" /></div> */}
                    <div><Link id="rootrot" to="/rootrot"><img className="home-pics" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1633292090/lms%20root%20rot/rootrot11_a1pydc.jpg" alt="" /></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Home;