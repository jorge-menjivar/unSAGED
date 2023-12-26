import {
  FC,
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useTranslation } from 'next-i18next';

import { SystemPrompt } from '@/types/system-prompt';

import { Button } from '@/components/common/ui/button';
import { PrimaryLabel } from '@/components/common/ui/primary-label';

import { ChipList } from './models-list';

import { useSystemPrompts } from '@/providers/system-prompts';

interface Props {
  systemPrompt: SystemPrompt;
  onClose: () => void;
}

export const SystemPromptEditModal: FC<Props> = ({ systemPrompt, onClose }) => {
  const { t } = useTranslation('systemPrompt');

  const { updateSystemPrompt } = useSystemPrompts();

  const [name, setName] = useState(systemPrompt.name);
  const [content, setContent] = useState(systemPrompt.content);
  const [models, setModels] = useState(systemPrompt.models);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSelectModel = (modelId: string) => {
    if (models.includes(modelId)) {
      // Remove model from list
      setModels(models.filter((model) => model !== modelId));
    } else {
      // Add model to list
      setModels([...models, modelId]);
    }
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        window.addEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mouseup', handleMouseUp);
      onClose();
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onClose]);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="fixed inset-0 z-10 overflow-hidden">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 overflow-hidden">
          <div
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          />

          <div
            ref={modalRef}
            className="dark:border-neutral-400 inline-block max-h-[400px] transform
            overflow-y-hidden rounded-lg border border-gray-300 
            bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl
            transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px]
            sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
            role="dialog"
          >
            <label className="mb-2 text-left text-neutral-900 dark:text-neutral-200">
              {t('Name')}
            </label>
            <input
              ref={nameInputRef}
              className="mt-2 mb-4 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100"
              placeholder={'A name for your system prompt.'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="mb-2 text-left text-neutral-900 dark:text-neutral-200">
              {t('Prompt')}
            </label>
            <textarea
              className="mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100"
              style={{ resize: 'none' }}
              placeholder={'Your custom prompt'}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
            />

            <PrimaryLabel
              tip={'The models to make this system prompt available for.'}
            >
              {t('Models')}
            </PrimaryLabel>
            <div className="max-h-[100px] overflow-auto">
              <ChipList
                selectedModels={models}
                handleSelectModel={handleSelectModel}
              />
            </div>

            <div className="flex space-x-4 mt-4">
              <Button
                onClick={() => {
                  onClose();
                }}
              >
                {t('Cancel')}
              </Button>
              <Button
                onClick={() => {
                  const updatedPrompt: SystemPrompt = {
                    id: systemPrompt.id,
                    name: name,
                    content: content,
                    folderId: systemPrompt.folderId,
                    models: models,
                  };
                  updateSystemPrompt(updatedPrompt);
                  onClose();
                }}
              >
                {t('Save')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
