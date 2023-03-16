// src/components/ApiKeyInput.tsx
import React, { useState } from "react";

interface ApiKeyInputProps {
  onApiKeySubmit: (apiKey: string) => void;
}

export const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onApiKeySubmit(apiKey);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Enter OpenAI API Key</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="apiKey" className="block mb-2">
          API Key:
        </label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="border-2 p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Submit API Key
        </button>
      </form>
    </div>
  );
};
