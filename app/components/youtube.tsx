import React from 'react';

interface HTMLContentProps {
  iframeHtml: string;
}

const YouTubeEmbed: React.FC<HTMLContentProps> = ({ iframeHtml }) => {
  return (
    <div className="video-container ">
      <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
    </div>
  );
};

export default YouTubeEmbed;
