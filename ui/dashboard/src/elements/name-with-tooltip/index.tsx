import { forwardRef, ReactNode, useEffect, useState } from 'react';
import { cn } from 'utils/style';
import { Tooltip } from 'components/tooltip';

interface Props {
  id: string;
  maxLines?: number;
  content: ReactNode;
  trigger: ReactNode;
}

interface DefaultTriggerProps {
  id: string;
  name: string;
  maxLines?: number;
  className?: string;
  haveAction?: boolean;
  onClick?: () => void;
}

interface DefaultContentProps {
  id: string;
  content: ReactNode;
}

const DefaultTrigger = forwardRef<HTMLDivElement, DefaultTriggerProps>(
  ({ id, name, maxLines = 2, className, haveAction = true, onClick }, ref) => {
    const parentId = `parent-${id}`;
    const childrenId = `children-${id}`;

    return (
      <div
        ref={ref}
        id={parentId}
        className={cn(
          'typo-para-medium text-gray-700',
          { 'text-primary-500 underline cursor-pointer': haveAction },
          className
        )}
        onClick={onClick}
      >
        <p
          className="text-start break-all"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: maxLines,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {name}
        </p>
        <p
          id={childrenId}
          className="w-full break-all -z-10 invisible absolute left-0 right-0 text-transparent"
        >
          {name}
        </p>
      </div>
    );
  }
);

const DefaultContent = forwardRef<HTMLDivElement, DefaultContentProps>(
  ({ id, content }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          maxWidth: document?.getElementById(`parent-${id}`)?.offsetWidth,
          wordBreak: 'break-all'
        }}
      >
        {content}
      </div>
    );
  }
);

const NameWithTooltip = ({ id, maxLines = 2, content, trigger }: Props) => {
  const [isTruncate, setIsTruncate] = useState(false);
  const childrenId = `children-${id}`;

  useEffect(() => {
    const hasMoreThanMaxLines = () => {
      const pElement = document.getElementById(childrenId);
      if (pElement) {
        pElement.style.display = 'none';
        void pElement.offsetHeight;
        pElement.style.display = '';

        const style = window.getComputedStyle(pElement);
        const lineHeight = parseFloat(style.lineHeight);
        const height = pElement.clientHeight;
        return setIsTruncate(height / lineHeight > maxLines);
      }
      return setIsTruncate(false);
    };
    hasMoreThanMaxLines();

    window.addEventListener('resize', hasMoreThanMaxLines);
    return () => window.removeEventListener('resize', hasMoreThanMaxLines);
  }, [childrenId, maxLines]);

  return (
    <Tooltip
      asChild={false}
      align="start"
      content={content}
      hidden={!isTruncate}
      trigger={trigger}
      triggerCls={'relative cursor-default'}
    />
  );
};

NameWithTooltip.Trigger = DefaultTrigger;
NameWithTooltip.Content = DefaultContent;

export default NameWithTooltip;
