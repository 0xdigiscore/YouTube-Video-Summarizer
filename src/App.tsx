// src/App.tsx
import React, { useState } from "react";
import { VideoSummarizer } from "./components/VideoSummarizer";
import { ApiKeyInput } from "./components/ApiKeyInput";
import "./index.css";

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState("");

  const onApiKeySubmit = (submittedApiKey: string) => {
    setApiKey(submittedApiKey);
  };

  const summarizeVideo = async (videoId: string) => {
    if (!apiKey) {
      return "Please enter your OpenAI API key.";
    }

    // TODO: Use YouTube Data API and OpenAI API to generate video summary.
    // Use the apiKey variable when making API calls.
    return "This is a placeholder summary for video ID: " + videoId;
  };

  return (
    <div className="App">
      <ApiKeyInput onApiKeySubmit={onApiKeySubmit} />
      <VideoSummarizer onSummarize={summarizeVideo} />
    </div>
  );
};

export default App;
