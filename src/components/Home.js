import Falling from './Falling';
import MainVideo from './MainVideo';

function Home () {
    return (
        <div>
            <MainVideo />

            <div id="syzzle-fill">

                <div id="audio-players">
                {/* <Embed 
                url="https://music.apple.com/us/album/syzzle-single/1554575992"
                width={400}
                height={150}
                /> */}

                <iframe title="syzzle-spotify-player" id="syzzle-spotify-player" src="https://open.spotify.com/embed/track/6aazTq4c97xRQrumZBwLe5" width="400" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

            </div>

                <Falling />


        </div>
    )
}

export default Home;