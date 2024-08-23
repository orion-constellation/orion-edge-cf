// Simple config with cache and retry
const config = {
    "virtual_key": "***", // Your Virtual Key
    "cache": { // Optional
      "mode": "semantic",
      "max_age": 10000
    },
    "retry": { // Optional
      "attempts": 5,
      "on_status_codes": []
    }
  }
  
  // Load balancing with 2 OpenAI keys
  {
    "strategy": {
        "mode": "loadbalance"
      },
    "targets": [
      {
        "provider": "openai",
        "api_key": "sk-***"
      },
      {
        "provider": "openai",
        "api_key": "sk-***"
      }
    ]
  }