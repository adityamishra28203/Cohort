import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
},{
    title: "How to make youtube thumbnails in 2 hours | tutorial video | gaming",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Aditya",
    views: "46M",
    timestamp: "2 days ago"
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=> <div>
            <VideoCard
                  title={video.title}
                  image={video.image}
                  thumbImage={video.thumbImage}
                  author={video.author}
                  views={video.views}
                  timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}