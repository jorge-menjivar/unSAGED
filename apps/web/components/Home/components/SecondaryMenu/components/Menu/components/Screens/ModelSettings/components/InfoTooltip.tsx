import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@ui/components/ui/tooltip';
import { IconInfoCircle } from '@tabler/icons-react';

export const InfoTooltip = ({ children }: any) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="shadow-sm inline-flex items-center justify-center
          rounded-full outline-none focus:shadow-black"
          >
            <IconInfoCircle height={18} width={18} className="ml-1" />
          </button>
        </TooltipTrigger>
        <TooltipContent
          className="z-50 max-w-sm data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade
            data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
            data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
            data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade 
            select-none rounded-[4px] px-[15px] py-[10px] 
            text-[15px] leading-none will-change-[transform,opacity]
            bg-theme-tooltip-light dark:bg-theme-tooltip-dark"
          sideOffset={5}
        >
          {children}
          {/* <TooltipArrow className="fill-theme-tooltip-light dark:fill-theme-tooltip-dark" /> */}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
