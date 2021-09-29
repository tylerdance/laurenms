function Falling () {
    return (
        <div>
            <div id="falling">
                <div id="falling-pics">
                    <img className="falling-artwork" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603125/sugiwon/Falling_Final_no_parental_sizing_correct_insta-01_iv0wct.jpg" alt="" />
                    <img className="falling-artwork" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603133/sugiwon/third_panel_3_insta-01_jqpxto.jpg" alt="" />
                    <img className="falling-artwork" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603117/sugiwon/Falling_Final_back_cover_2_insta-01_pyb544.jpg" alt="" />
                </div>

                <div id="falling-players">
                    {/* <Embed 
                    url="https://music.apple.com/us/album/falling/1453405100"
                    width={400}
                    height={220}
                    /> */}

                    <iframe title="falling-spotify-player" id="falling-spotify-player" src="https://open.spotify.com/embed/album/4y1HHshmC6tmu1gFNG0xJ2" width="400" height="220" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

            </div>
        </div>
    )
}

export default Falling;