import jsonschema
from jsonschema import validate

# Define the configuration schema
config_schema = {
    "type": "object",
    "properties": {
        "apiKey": {"type": "string"},
        "virtualKey": {"type": "string"},
        "config": {"type": "string"},
        "provider": {"type": "string"},
        "baseURL": {"type": "string"},
        "traceID": {"type": "string"},
        "metadata": {"type": "object"},
        "cacheForceRefresh": {"type": "boolean"},
        "cacheNamespace": {"type": "string"},
        "customHost": {"type": "string"},
        "forwardHeaders": {"type": "array", "items": {"type": "string"}},
        "azureResourceName": {"type": "string"},
        "azureDeploymentId": {"type": "string"},
        "azureApiVersion": {"type": "string"},
        "vertexProjectId": {"type": "string"},
        "vertexRegion": {"type": "string"},
        "awsAccessKeyId": {"type": "string"},
        "awsSecretAccessKey": {"type": "string"},
        "awsRegion": {"type": "string"},
        "awsSessionToken": {"type": "string"}
    },
    "required": ["apiKey", "provider"]
}

# Define the configuration object
portkey_config = {
    "apiKey": "your-api-key",
    "virtualKey": "your-virtual-key",
    "config": "your-config-slug",
    "provider": "OpenAI",
    "baseURL": "https://api.portkey.ai",
    "traceID": "your-trace-id",
    "metadata": {
        "_prompt": "example_prompt",
        "_user": "example_user",
        "_organisation": "example_org",
        "_environment": "production"
    },
    "cacheForceRefresh": False,
    "cacheNamespace": "your-cache-namespace",
    "customHost": "https://custom-host.com",
    "forwardHeaders": ["Authorization", "Content-Type"],
    "azureResourceName": "your-azure-resource",
    "azureDeploymentId": "your-azure-deployment-id",
    "azureApiVersion": "v3.0",
    "vertexProjectId": "your-vertex-project-id",
    "vertexRegion": "us-central1",
    "awsAccessKeyId": "your-aws-access-key-id",
    "awsSecretAccessKey": "your-aws-secret-access-key",
    "awsRegion": "us-west-2",
    "awsSessionToken": "your-aws-session-token"
}

# Validate the configuration against the schema
validate(instance=portkey_config, schema=config_schema)
