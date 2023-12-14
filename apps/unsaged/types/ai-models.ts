export type AiModel = {
  id: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  requestLimit: number;
  vendor: 'OpenAI' | 'Azure' | 'Anthropic' | 'Google' | 'Ollama' | 'Replicate';
  type: 'text';
} | {
  id: string;
  vendor: 'OpenAI' | 'Azure';
  type: 'image';
}

export type OpenAiClientOptions = {
  vendor: 'openai',
  apiUrl: string;
  organisation: string;
} | {
  modelId?: string;
  vendor: 'azure',
  apiUrl: string;
  apiVersion: string;
} | {
  vendor: 'fireworks',
  apiUrl: string;
}

export interface GetAvailableAIModelResponse {
  error?: any;
  data: any[];
}

export interface PossibleAiModelsInterface {
  [modelId: string]: AiModel;
}

export const PossibleAiModels: PossibleAiModelsInterface = {
  //
  // OpenAI
  //
  'gpt-3.5-turbo': {
    id: 'gpt-3.5-turbo',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-3.5-turbo-16k': {
    id: 'gpt-3.5-turbo-16k',
    maxLength: 48000,
    tokenLimit: 16000,
    requestLimit: 12000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4': {
    id: 'gpt-4',
    maxLength: 24000,
    tokenLimit: 8000,
    requestLimit: 6000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4-32k': {
    id: 'gpt-4-32k',
    maxLength: 96000,
    tokenLimit: 32000,
    requestLimit: 30000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4-1106-preview': {
    id: 'gpt-4-1106-preview',
    maxLength: 500000,
    tokenLimit: 128000,
    requestLimit: 120000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'dall-e-3': {
    id: 'dall-e-3',
    vendor: 'OpenAI',
    type: 'image',
  },
  'dall-e-2': {
    id: 'dall-e-2',
    vendor: 'OpenAI',
    type: 'image',
  },
  //
  // Azure
  //
  'gpt-35-az': {
    id: 'will get from azure',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'Azure',
    type: 'text',
  },
  'gpt-35-turbo-az': {
    id: 'will get from azure',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'Azure',
    type: 'text',
  },
  'gpt-35-turbo-16k-az': {
    id: 'will get from azure',
    maxLength: 48000,
    tokenLimit: 16000,
    requestLimit: 12000,
    vendor: 'Azure',
    type: 'text',
  },
  'gpt-4-az': {
    id: 'gpt-4',
    maxLength: 24000,
    tokenLimit: 4000,
    requestLimit: 6000,
    vendor: 'Azure',
    type: 'text',
  },
  'dall-e-3-az': {
    id: 'will get from azure',
    vendor: 'Azure',
    type: 'image',
  },
  //
  // Anthropic
  //
  'claude-instant-1': {
    id: 'claude-instant-1',
    maxLength: 400000,
    tokenLimit: 100000,
    requestLimit: 98000,
    vendor: 'Anthropic',
    type: 'text',
  },
  'claude-2': {
    id: 'claude-2',
    maxLength: 400000,
    tokenLimit: 100000,
    requestLimit: 98000,
    vendor: 'Anthropic',
    type: 'text',
  },
  //
  // Google
  //
  bard: {
    id: 'bard',
    maxLength: 12000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Google',
    type: 'text',
  },
  //
  // Ollama
  //
  'llama2:latest': {
    id: 'llama2:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2:7b': {
    id: 'llama2:7b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2:13b': {
    id: 'llama2:13b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2:70b': {
    id: 'llama2:70b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:latest': {
    id: 'codellama:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:7b': {
    id: 'codellama:7b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:13b': {
    id: 'codellama:13b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:34b': {
    id: 'codellama:34b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:latest': {
    id: 'wizardcoder:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:7b-python': {
    id: 'wizardcoder:7b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:13b-python': {
    id: 'wizardcoder:13b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:34b-python': {
    id: 'wizardcoder:34b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:latest': {
    id: 'phind-codellama:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34b': {
    id: 'phind-codellama:34b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34b-v2': {
    id: 'phind-codellama:34b-v2',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34b-python': {
    id: 'phind-codellama:34b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mistral:latest': {
    id: 'mistral:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mistral-openorca:latest': {
    id: 'mistral-openorca:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'openchat:latest': {
    id: 'openchat:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'neural-chat:latest': {
    id: 'neural-chat:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'goliath:latest': {
    id: 'goliath:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'vicuna:latest': {
    id: 'vicuna:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'orca-mini:latest': {
    id: 'orca-mini:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2-uncensored:latest': {
    id: 'llama2-uncensored:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'yarn-mistral:7b-128k': {
    id: 'yarn-mistral:7b-128k',
    maxLength: 128000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'deepseek-coder:latest': {
    id: 'deepseek-coder:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'deepseek-coder:6.7b': {
    id: 'deepseek-coder:6.7b',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'deepseek-coder:33b': {
    id: 'deepseek-coder:33b',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  //
  // Ollama - Custom Models
  //
  'llama2_13B_2080:latest': {
    id: 'llama2_13B_2080:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder13b_python_2080:latest': {
    id: 'wizardcoder13b_python_2080:latest',
    maxLength: 32000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phindcodellama-34b-_2080:latest': {
    id: 'phindcodellama-34b-_2080:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34bv2-vram2080': {
    id: 'phind-codellama:34bv2-vram2080',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
};

export interface ModelParams {
  temperature?: number;
  top_p?: number;
  top_k?: number;
  repeat_penalty?: number;
  presence_penalty?: number;
  stop?: string[];
  max_tokens?: number;
  seed?: number;
  n?: number | null;
  quality?: 'standard' | 'hd';
  response_format?: 'url' | 'b64_json' | null;
  size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792' | null;
  style?: 'vivid' | 'natural' | null;
}
