import { cn } from 'utils/style';
import { IconChevronDown } from '@icons';
import Icon from 'components/icon';
import TruncationWithTooltip from 'elements/truncation-with-tooltip';

export const Tag = ({
  tagId,
  value,
  className
}: {
  tagId?: string;
  value: string;
  className?: string;
}) => (
  <TruncationWithTooltip
    elementId={tagId || ''}
    content={value}
    maxSize={250}
    className="!w-fit"
  >
    <div
      id={tagId}
      className={cn(
        'px-2 py-1.5 bg-primary-100/70 text-primary-500 typo-para-small !w-fit leading-[14px] rounded whitespace-nowrap',
        className
      )}
    >
      {value}
    </div>
  </TruncationWithTooltip>
);

export const renderTag = ({
  tags,
  isExpanded,
  className,
  onExpand
}: {
  tags: string[];
  isExpanded: boolean;
  className?: string;
  onExpand: () => void;
}) => {
  return (
    <div
      className={cn('flex items-center w-full gap-x-2', {
        'items-start': isExpanded
      })}
    >
      <div className="flex w-fit items-center flex-wrap gap-2">
        {(isExpanded ? tags : tags.slice(0, 3))?.map((tag, index) => (
          <Tag
            tagId={`${tag}-${index}`}
            key={index}
            value={tag}
            className={className}
          />
        ))}
        {tags.length > 3 && !isExpanded && (
          <Tag value={`+${tags.length - 3}`} />
        )}
      </div>
      {tags.length > 3 && (
        <div
          className={cn('flex-center cursor-pointer hover:bg-gray-200 rounded')}
          onClick={onExpand}
        >
          <Icon
            icon={IconChevronDown}
            size={'sm'}
            className={cn('flex-center rotate-0', {
              'rotate-180': isExpanded
            })}
          />
        </div>
      )}
    </div>
  );
};
