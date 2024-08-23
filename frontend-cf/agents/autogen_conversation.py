from autogen import AssistantAgent, UserProxyAgent, config_list_from_json

# Import the portkey library to fetch helper functions
from portkey_ai import PORTKEY_GATEWAY_URL, createHeaders

config_list = [
    {
        # Set a dummy value, since we'll pick the API key from the virtual key
        "api_key": 'X',
        
        # Pick the model from the provider of your choice
        "model": "mistralai/Mistral-7B-Instruct-v0.1",
        "base_url": PORTKEY_GATEWAY_URL,
        "api_type": "openai", # Portkey conforms to the openai api_type

         "default_headers": createHeaders(
            api_key = "Your Portkey API Key",
            # Add your virtual key here
            virtual_key = "Your Anyscale Virtual Key",
        )
    }
]

assistant = AssistantAgent("assistant", llm_config={"config_list": config_list})
user_proxy = UserProxyAgent("user_proxy", code_execution_config={"work_dir": "coding", "use_docker": False}) # IMPORTANT: set to True to run code in docker, recommended
user_proxy.initiate_chat(assistant, message="Say this is also a test - part 2.")
# This initiates an automated chat between the two agents to solve the task