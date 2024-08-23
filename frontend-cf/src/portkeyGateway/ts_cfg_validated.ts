interface PortkeyConfig {
    apiKey: string;
    virtualKey?: string;
    config?: string;
    provider: string;
    baseURL?: string;
    traceID?: string;
    metadata?: {
      _prompt?: string;
      _user?: string;
      _organisation?: string;
      _environment?: string;
      [key: string]: any;
    };
    cacheForceRefresh?: boolean;
    cacheNamespace?: string;
    customHost?: string;
    forwardHeaders?: string[];
    azureResourceName?: string;
    azureDeploymentId?: string;
    azureApiVersion?: string;
    vertexProjectId?: string;
    vertexRegion?: string;
    awsAccessKeyId?: string;
    awsSecretAccessKey?: string;
    awsRegion?: string;
    awsSessionToken?: string;
  }
  
  const portkeyConfig: PortkeyConfig = {
    apiKey: "your-api-key",
    virtualKey: "your-virtual-key",
    config: "your-config-slug",
    provider: "OpenAI",
    baseURL: "https://api.portkey.ai",
    traceID: "your-trace-id",
    metadata: {
      _prompt: "example_prompt",
      _user: "example_user",
      _organisation: "example_org",
      _environment: "production"
    },
    cacheForceRefresh: false,
    cacheNamespace: "your-cache-namespace",
    customHost: "https://custom-host.com",
    forwardHeaders: ["Authorization", "Content-Type"],
    azureResourceName: "your-azure-resource",
    azureDeploymentId: "your-azure-deployment-id",
    azureApiVersion: "v3.0",
    vertexProjectId: "your-vertex-project-id",
    vertexRegion: "us-central1",
    awsAccessKeyId: "your-aws-access-key-id",
    awsSecretAccessKey: "your-aws-secret-access-key",
    awsRegion: "us-west-2",
    awsSessionToken: "your-aws-session-token"
  };