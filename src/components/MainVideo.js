import ReactPlayer from "react-player"

const MainVideo = () => {
    return (
        <div id="main-vid-div">
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=1_rs-VEkfm4'
                width='100%'
                height='100%'
                controls={true}
                />
            </div>

        </div>
    )
}

export default MainVideo;