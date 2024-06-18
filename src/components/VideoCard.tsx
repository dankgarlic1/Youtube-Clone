export function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.thumbImage} className="rounded-xl"></img>
      <div className="grid grid-cols-12 pl-2">
        <div className="col-span-2">
          <img src={props.channelImage} className={"rounded-full w-12 h-12"} />
        </div>
        <div className="col-span-10 ">
          {props.title}

          <div
            className="
        col-span-11 text-gray-400 text-base"
          >
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {/* 700K | 15 days ago */}
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
