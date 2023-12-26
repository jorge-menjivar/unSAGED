import { Conversation, Message } from '@/types/chat';
import { SavedSettings } from '@/types/settings';

import { getStream } from './ai_vendors/stream';
import { getTokenCount } from './ai_vendors/token-count';
import { storageGetSavedSettingValue } from './storage/local/settings';

export async function sendChatRequest(
  conversation: Conversation,
  messages: Message[],
  savedSettings: SavedSettings,
  assistantMessageId: string,
): Promise<{
  stream: ReadableStream | null;
  controller: AbortController | null;
}> {
  const model = conversation.model;

  if (!model) {
    console.error('No model selected.');
    return { stream: null, controller: null };
  }

  const apiKey: string | undefined = storageGetSavedSettingValue(
    savedSettings,
    `${model.vendor.toLowerCase()}.key`,
  );

  const { error: tokenCountError, count } = await getTokenCount(
    model,
    conversation.systemPrompt!.content,
    messages,
  );

  if (tokenCountError) {
    console.error(tokenCountError);
    return { stream: null, controller: null };
  }

  const controller = new AbortController();

  const { stream, error } = await getStream(
    savedSettings,
    model,
    conversation.systemPrompt!.content,
    conversation.params,
    apiKey,
    messages,
    count!,
    controller,
    assistantMessageId,
  );

  if (error) {
    console.error(error);
    return { stream: null, controller: null };
  }

  return { stream: stream, controller: controller };
}
