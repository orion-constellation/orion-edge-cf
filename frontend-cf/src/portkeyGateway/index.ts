import { Portkey } from 'portkey-ai';
import { portkeyConfig } from './portkeyConfig';
import dotenv from 'dotenv';

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  
  
  /**
   * Handles the incoming requests
   * @param {Request} request
   */
  async function handleRequest(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
  
    if (path.startsWith('/analyze')) {
      return await analyzeData(request);
    }
  
    return new Response('Not Found', { status: 404 });
  }
  
  /**
   * Analyzes data using the Portkey-AI Gateway
   * @param {Request} request
   */
  async function analyzeData(request: Request): Promise<Response> {
    const requestData = await request.json();
  
    const apiConfig = {
      apiKey: process.env.PORTKEY_AI_API_KEY,
      model: selectModel(), // Dynamically select model
      retries: 3,
      fallbackModels: ['text-embedding-ada-002', 'gpt-3.5-turbo'],
      virtualKeys: ['virtual-key-1', 'virtual-key-2']
    };
  
    const portkeyAI = new PortkeyAI(apiConfig);
  
    try {
      const response = await portkeyAI.analyze(requestData);
      return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
  
  /**
   * Selects the model dynamically based on some criteria
   */
  function selectModel(): string {
    // Implement your model selection logic here
    return 'gpt-4';
  }
