import { AiModel, ModelParams } from '@/types/ai-models';
import { Message } from '@/types/chat';

import { streamAnthropic } from './anthropic/stream';
import { streamPaLM2 } from './google/stream';
import { streamOllama } from './ollama/stream';
import { streamOpenAI } from './openai/stream';
import { streamReplicate } from './replicate/stream';
import { streamAzure } from './azure/stream';

export async function getStream(
  model: AiModel,
  systemPrompt: string,
  params: ModelParams,
  apiKey: string | undefined,
  messages: Message[],
  tokenCount: number,
) {
  switch (model.vendor) {
    case 'OpenAI':
      return streamOpenAI(
        model,
        systemPrompt,
        params,
        apiKey,
        messages,
        tokenCount,
      );
    case 'Azure':
      return streamAzure(
        model,
        systemPrompt,
        params,
        apiKey,
        messages,
        tokenCount,
      );
    case 'Anthropic':
      return streamAnthropic(
        model,
        systemPrompt,
        params,
        apiKey,
        messages,
        tokenCount,
      );
    case 'Replicate':
      return streamReplicate(
        model,
        systemPrompt,
        params,
        apiKey,
        messages,
        tokenCount,
      );
    case 'Google':
      return streamPaLM2(
        model,
        systemPrompt,
        params,
        apiKey,
        messages,
        tokenCount,
      );
    case 'Ollama':
      return streamOllama(
        model,
        systemPrompt,
        params,
        messages
      );
    default:
      return { error: 'Unknown vendor' };
  }
}
