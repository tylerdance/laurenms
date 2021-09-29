import { Link } from 'react-router-dom';

function Discography () {
    return (
        <div id="disc-master-div">      

                <div id="disc">
                    <div className="disc-each">
                            <p className="song-title">Syzzle – Single</p>
                            <img className="disc-art" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616685020/sugiwon/Syzzle-art_ikjwaf.jpg" alt="" />
                            <p className="prod-by">Produced by Garth Tim</p>
                            <p className="prod-by">Mixed and mastered by Garth Tim</p>
                            {/* <div className="music-links">
                                <div>
                                    <a href="https://open.spotify.com/track/6aazTq4c97xRQrumZBwLe5?si=b06f489f77334d83" target="_blank" rel="noreferrer" alt="">
                                        <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616625310/spotify_1_lwpby9.png" alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://music.apple.com/us/album/syzzle-single/1554575992" target="_blank" rel="noreferrer" alt="">
                                        <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616624839/applemusic_xx311x.png" alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.youtube.com/watch?v=1_rs-VEkfm4" target="_blank" rel="noreferrer" alt="">
                                        <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616607749/youtube_uxoade.png" alt="" />
                                    </a>
                                </div>
                            </div> */}
                            {/* <a href="https://open.spotify.com/track/6aazTq4c97xRQrumZBwLe5?si=a3f0bd4221ec41b1" target="_blank" rel="noreferrer">
                            </a> */}
                    </div>

                    <div className="disc-each">
                        <p className="song-title">Nova – Single</p>
                        <img className="disc-art" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616685014/sugiwon/Nova-art_zfx3lb.jpg" alt="" />
                        {/* <a href="https://open.spotify.com/track/7oXGJ2Bjs9sfVIGwG1wb9l?si=2d07f4dd55694837" target="_blank" rel="noreferrer">
                        </a> */}
                        <p className="prod-by">Produced by Tyler Dance</p>
                        <p className="prod-by">Mixed and mastered by Tyler Dance</p>
                        {/* <div className="music-links">
                            <div>
                                <a href="https://open.spotify.com/artist/4S7Yep3i1Xa0Y4Dsu4GsK9" target="_blank" rel="noreferrer" alt="">
                                    <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616625310/spotify_1_lwpby9.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="https://music.apple.com/us/artist/sugiwon/1436411443" target="_blank" rel="noreferrer" alt="">
                                    <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616624839/applemusic_xx311x.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCp4nAnP5y8VHG1QBz0_bwqA" target="_blank" rel="noreferrer" alt="">
                                    <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616607749/youtube_uxoade.png" alt="" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    
                    <div className="disc-each">
                        <p className="song-title">Falling – Album</p>
                        <img className="disc-art" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616603125/sugiwon/Falling_Final_no_parental_sizing_correct_insta-01_iv0wct.jpg" alt="" />
                        {/* <a href="https://open.spotify.com/album/4y1HHshmC6tmu1gFNG0xJ2?si=LNOUhDEmTBCEomOTqPyHug" target="_blank" rel="noreferrer">
                        </a> */}
                        <Link className="falling-cred-link" to="/fallingcredits">Production Credits</Link>
                            {/* <p className="prod-by">Production Credits</p> */}
                    
                        {/* <div className="music-links">
                            <div>
                                <a href="https://open.spotify.com/artist/4S7Yep3i1Xa0Y4Dsu4GsK9" target="_blank" rel="noreferrer" alt="">
                                    <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616625310/spotify_1_lwpby9.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="https://music.apple.com/us/artist/sugiwon/1436411443" target="_blank" rel="noreferrer" alt="">
                                    <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616624839/applemusic_xx311x.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCp4nAnP5y8VHG1QBz0_bwqA" target="_blank" rel="noreferrer" alt="">
                                    <img className="social-icon" src="https://res.cloudinary.com/df3zbbtc1/image/upload/v1616607749/youtube_uxoade.png" alt="" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

        </div>
    )
}

export default Discography;