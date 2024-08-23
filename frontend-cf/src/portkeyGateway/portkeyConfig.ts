// Import necessary modules
import type { PortkeyAIConfig } from 'portkey-ai';

export const portkeyConfig: PortkeyAIConfig = {
  providers: [
    {
      name: "OpenAI",
      apiKey: process.env.OPENAI_API_KEY,
      model: "text-embedding-ada-002",
      dim: 1536,
      usage: "General-purpose text embeddings with high dimensionality for detailed representations.",
      fallback: "anthropic",
    },
    {
      name: "anthropic",
      apiKey: process.env.CLAUDE_API_KEY,
      model: "claude-v1",
      dim: 1536,
      usage: "General-purpose text embeddings with high dimensionality for detailed representations.",
      fallback: "mistral",
    },
    {
      name: "Mistral",
      apiKey: process.env.MISTRAL_VIRTUAL_KEY,
      model: "text-embedding-mistral",
      dim: 768,
      usage: "Specialized for scientific and research paper embeddings.",
      fallback: null,
    }
  ],
  loadBalancing: {
    strategy: "round-robin", // Options: "round-robin", "random", "least-connections"
    virtualKeys: [
      process.env.OPENAI_VIRTUAL_KEY_1,
      process.env.OPENAI_VIRTUAL_KEY_2,
    ],
  },
  retries: {
    maxRetries: 3,
    retryDelay: 2000, // milliseconds
  },
  fallback: {
    enabled: true,
    models: ["claude-v1", "text-embedding-mistral"],
  },
  logging: {
    level: "info", // Options: "debug", "info", "warn", "error"
    endpoint: "https://your-logging-endpoint",
  },
};

