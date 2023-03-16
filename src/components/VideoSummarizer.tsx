import React, { useState } from "react";

interface VideoSummarizerProps {
  onSummarize: (videoId: string) => Promise<string>;
}

export const VideoSummarizer: React.FC<VideoSummarizerProps> = ({ onSummarize }) => {
  const [videoId, setVideoId] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await onSummarize(videoId);
    setSummary(result);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">YouTube Video Summarizer</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="videoId" className="block mb-2">
          YouTube Video ID:
        </label>
        <input
          type="text"
          id="videoId"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          className="border-2 p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Summarize Video
        </button>
      </form>
      {summary && <div className="border p-4">{summary}</div>}
    </div>
  );
};
