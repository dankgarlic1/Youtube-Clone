import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "BHAI HAI - (Official Music Video) | Fotty Seven | Bali | Enzo",
    author: "Fotty Seven",
    views: "700K",
    timestamp: "15 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "Summer Vibes - Chill Mix | DJ Chillout",
    author: "DJ Chillout",
    views: "1.2M",
    timestamp: "2 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "Epic Travel Guide - Exploring the Alps | Travel Guru",
    author: "Travel Guru",
    views: "850K",
    timestamp: "1 week ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "Mastering Python in 30 Days - Complete Course | Code Academy",
    author: "Code Academy",
    views: "500K",
    timestamp: "10 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "The Ultimate Workout Routine | Fitness Pro",
    author: "Fitness Pro",
    views: "2.3M",
    timestamp: "5 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "Cooking Secrets - Delicious Pasta Recipes | Chef Mario",
    author: "Chef Mario",
    views: "1.1M",
    timestamp: "3 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "Tech Trends 2024 - What's Next? | Tech Today",
    author: "Tech Today",
    views: "900K",
    timestamp: "7 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "Gardening Tips for Beginners | Green Thumb",
    author: "Green Thumb",
    views: "300K",
    timestamp: "12 days ago",
  },
  {
    thumbImage: "/thumbnail0.jpg",
    channelImage: "/channelimage0.jpg",
    title: "History of Ancient Civilizations | History Buff",
    author: "History Buff",
    views: "1.5M",
    timestamp: "4 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            thumbImage={video.thumbImage}
            channelImage={video.channelImage}
            title={video.title}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>{" "}
        </div>
      ))}
    </div>
  );
};
