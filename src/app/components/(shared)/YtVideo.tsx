import React from "react";

interface YtVideoProps {
  embedId: string;
}

const YtVideo: React.FC<YtVideoProps> = ({ embedId }) => (
  <div className="relative overflow-hidden h-0 pb-[130%] md:pb-[96%] lg:pb-[56%]">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="absolute left-0 top-0 w-full h-full"
    />
  </div>
);

export default YtVideo;
