import { SupaDatabase } from './types/supabase';
import { AiModel } from '@/types/ai-models';
import { User } from '@/types/auth';
import { Conversation, Message } from '@/types/chat';
import { Database } from '@/types/database';
import { FolderInterface } from '@/types/folder';
import { SystemPrompt } from '@/types/system-prompt';
import { Template } from '@/types/templates';

import { OPENAI_API_KEY, SUPABASE_ANON_KEY, SUPABASE_URL } from '../../const';
import {
  supaCreateConversation,
  supaDeleteConversation,
  supaUpdateConversation,
} from './helpers/conversation';
import {
  supaDeleteConversations,
  supaGetConversations,
  supaUpdateConversations,
} from './helpers/conversations';
import {
  supaCreateFolder,
  supaDeleteFolder,
  supaUpdateFolder,
} from './helpers/folder';
import {
  supaDeleteFolders,
  supaGetFolders,
  supaUpdateFolders,
} from './helpers/folders';
import {
  supaCreateMessage,
  supaDeleteMessage,
  supaUpdateMessage,
} from './helpers/message';
import {
  supaCreateMessages,
  supaDeleteMessages,
  supaGetMessages,
  supaUpdateMessages,
} from './helpers/messages';
import {
  supaCreatePrompt,
  supaDeletePrompt,
  supaUpdatePrompt,
} from './helpers/prompt';
import {
  supaDeletePrompts,
  supaGetPrompts,
  supaUpdatePrompts,
} from './helpers/prompts';
import {
  supaCreateSystemPrompt,
  supaDeleteSystemPrompt,
  supaUpdateSystemPrompt,
} from './helpers/systemPrompt';
import {
  supaDeleteSystemPrompts,
  supaGetSystemPrompts,
  supaUpdateSystemPrompts,
} from './helpers/systemPrompts';

import { SupabaseClient, createClient } from '@supabase/supabase-js';

export class SupabaseDatabase implements Database {
  name = 'supabase';
  supabase: SupabaseClient | null = null;

  async connect({
    customAccessToken,
  }: {
    customAccessToken: string;
  }): Promise<void> {
    if (!this.supabase) {
      this.supabase = createClient<SupaDatabase>(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
          global: {
            headers: {
              Authorization: `Bearer ${customAccessToken}`,
            },
          },
          auth: {
            persistSession: false,
          },
        },
      );
    }
  }

  async disconnect(): Promise<void> {}

  // -----------------------------------Conversation-----------------------------------

  async createConversation(
    user: User,
    newConversation: Conversation,
  ): Promise<boolean> {
    return await supaCreateConversation(this.supabase!, newConversation);
  }

  async updateConversation(
    user: User,
    updatedConversation: Conversation,
  ): Promise<boolean> {
    return await supaUpdateConversation(this.supabase!, updatedConversation);
  }

  async deleteConversation(
    user: User,
    conversationId: string,
  ): Promise<boolean> {
    return await supaDeleteConversation(this.supabase!, conversationId);
  }

  // -----------------------------------Conversations-----------------------------------
  async getConversations(
    user: User,
    systemPrompts: SystemPrompt[],
    models: AiModel[],
  ): Promise<Conversation[]> {
    return await supaGetConversations(this.supabase!, systemPrompts, models);
  }

  async updateConversations(
    user: User,
    updatedConversations: Conversation[],
  ): Promise<boolean> {
    return await supaUpdateConversations(this.supabase!, updatedConversations);
  }

  async deleteConversations(user: User): Promise<boolean> {
    return await supaDeleteConversations(this.supabase!);
  }

  // -----------------------------------Folder-----------------------------------

  async createFolder(user: User, newFolder: FolderInterface): Promise<boolean> {
    return await supaCreateFolder(this.supabase!, newFolder);
  }

  async updateFolder(
    user: User,
    updatedFolder: FolderInterface,
  ): Promise<boolean> {
    return await supaUpdateFolder(this.supabase!, updatedFolder);
  }

  async deleteFolder(user: User, folderId: string): Promise<boolean> {
    return await supaDeleteFolder(this.supabase!, folderId);
  }

  // -----------------------------------Folders-----------------------------------
  async getFolders(user: User): Promise<FolderInterface[]> {
    return await supaGetFolders(this.supabase!);
  }

  async updateFolders(
    user: User,
    updatedFolders: FolderInterface[],
  ): Promise<boolean> {
    return await supaUpdateFolders(this.supabase!, updatedFolders);
  }

  async deleteFolders(user: User, folderIds: string[]): Promise<boolean> {
    return await supaDeleteFolders(this.supabase!, folderIds);
  }

  // -----------------------------------Message-----------------------------------
  async createMessage(user: User, newMessage: Message): Promise<boolean> {
    return await supaCreateMessage(this.supabase!, newMessage);
  }

  async updateMessage(user: User, updatedMessage: Message): Promise<boolean> {
    return await supaUpdateMessage(this.supabase!, updatedMessage);
  }

  async deleteMessage(user: User, messageId: string): Promise<boolean> {
    return await supaDeleteMessage(this.supabase!, messageId);
  }

  // -----------------------------------Messages-----------------------------------
  async getMessages(user: User, conversationId?: string): Promise<Message[]> {
    return await supaGetMessages(this.supabase!, conversationId);
  }

  async createMessages(user: User, newMessages: Message[]): Promise<boolean> {
    return await supaCreateMessages(this.supabase!, newMessages);
  }

  async updateMessages(
    user: User,
    updatedMessages: Message[],
  ): Promise<boolean> {
    return await supaUpdateMessages(this.supabase!, updatedMessages);
  }

  async deleteMessages(user: User, messageIds: string[]): Promise<boolean> {
    return await supaDeleteMessages(this.supabase!, messageIds);
  }

  // -----------------------------------Prompt-----------------------------------
  async createTemplate(user: User, newPrompt: Template): Promise<boolean> {
    return await supaCreatePrompt(this.supabase!, newPrompt);
  }

  async updateTemplate(user: User, updatedPrompt: Template): Promise<boolean> {
    return await supaUpdatePrompt(this.supabase!, updatedPrompt);
  }

  async deleteTemplate(user: User, promptId: string): Promise<boolean> {
    return await supaDeletePrompt(this.supabase!, promptId);
  }

  // -----------------------------------Prompts-----------------------------------
  async getTemplates(user: User): Promise<Template[]> {
    return await supaGetPrompts(this.supabase!);
  }

  async updateTemplates(
    user: User,
    updatedPrompts: Template[],
  ): Promise<boolean> {
    return await supaUpdatePrompts(this.supabase!, updatedPrompts);
  }

  async deleteTemplates(user: User, promptIds: string[]): Promise<boolean> {
    return await supaDeletePrompts(this.supabase!, promptIds);
  }

  // -----------------------------------SystemPrompt-----------------------------------
  async createSystemPrompt(
    user: User,
    newSystemPrompt: SystemPrompt,
  ): Promise<boolean> {
    return await supaCreateSystemPrompt(this.supabase!, newSystemPrompt);
  }

  async updateSystemPrompt(
    user: User,
    updatedSystemPrompt: SystemPrompt,
  ): Promise<boolean> {
    return await supaUpdateSystemPrompt(this.supabase!, updatedSystemPrompt);
  }

  async deleteSystemPrompt(
    user: User,
    systemPromptId: string,
  ): Promise<boolean> {
    return await supaDeleteSystemPrompt(this.supabase!, systemPromptId);
  }

  // -----------------------------------SystemPrompts-----------------------------------
  async getSystemPrompts(user: User): Promise<SystemPrompt[]> {
    return await supaGetSystemPrompts(this.supabase!);
  }

  async updateSystemPrompts(
    user: User,
    updatedSystemPrompts: SystemPrompt[],
  ): Promise<boolean> {
    return await supaUpdateSystemPrompts(this.supabase!, updatedSystemPrompts);
  }

  async deleteSystemPrompts(
    user: User,
    systemPromptIds: string[],
  ): Promise<boolean> {
    return await supaDeleteSystemPrompts(this.supabase!, systemPromptIds);
  }
}
