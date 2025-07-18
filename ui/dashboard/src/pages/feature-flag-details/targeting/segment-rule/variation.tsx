import { FunctionComponent, ReactNode, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'i18n';
import { Feature, RuleStrategyVariation, StrategyType } from '@types';
import { IconPercentage } from '@icons';
import Form from 'components/form';
import VariationLabel from 'elements/variation-label';
import { RuleSchema, StrategySchema } from '../form-schema';
import Strategy from './strategy';

export interface VariationOption {
  label: ReactNode;
  value: string;
  type: StrategyType;
  variationValue?: string;
  icon?: FunctionComponent;
}

const SegmentVariation = ({
  feature,
  defaultRolloutStrategy,
  segmentIndex,
  segmentRules
}: {
  feature: Feature;
  defaultRolloutStrategy: RuleStrategyVariation[];
  segmentIndex: number;
  segmentRules: RuleSchema[];
}) => {
  const { t } = useTranslation(['table', 'common', 'form']);

  const methods = useFormContext();
  const { watch, setFocus, setValue } = methods;
  const commonName = `segmentRules.${segmentIndex}.strategy`;
  const rolloutStrategy: RuleStrategyVariation[] = watch(
    `${commonName}.rolloutStrategy`
  );

  const percentageValueCount = useMemo(
    () => rolloutStrategy?.filter(item => item.weight > 0)?.length || 0,
    [rolloutStrategy]
  );
  const variationOptions: VariationOption[] = useMemo(() => {
    const variations = feature.variations.map((item, index) => ({
      label: <VariationLabel label={item.name || item.value} index={index} />,
      value: item.id,
      type: StrategyType.FIXED,
      variationValue: item.value
    }));
    return [
      ...variations,
      {
        label: t('form:manual-percentage'),
        value: StrategyType.ROLLOUT,
        type: StrategyType.ROLLOUT,
        icon: IconPercentage
      }
    ];
  }, [feature]);

  const handleSelectStrategy = useCallback(
    (item: VariationOption, onChange: (item: StrategySchema) => void) => {
      const { type, value } = item;
      const isFixed = type === StrategyType.FIXED;
      segmentRules[segmentIndex] = {
        ...segmentRules[segmentIndex],
        strategy: {
          ...segmentRules[segmentIndex].strategy,
          type: type as StrategyType,
          currentOption: value,
          fixedStrategy: {
            variation: isFixed
              ? value
              : segmentRules[segmentIndex]?.strategy?.fixedStrategy?.variation
          },
          rolloutStrategy: defaultRolloutStrategy
        }
      };

      onChange(segmentRules[segmentIndex].strategy);
      if (!isFixed) {
        let timerId: NodeJS.Timeout | null = null;
        if (timerId) clearTimeout(timerId);
        defaultRolloutStrategy?.forEach((_, index) =>
          setValue(`${commonName}.rolloutStrategy.${index}.weight`, 0)
        );
        timerId = setTimeout(
          () => setFocus(`${commonName}.rolloutStrategy.0.weight`),
          100
        );
      }
    },
    [
      feature,
      variationOptions,
      defaultRolloutStrategy,
      segmentRules,
      segmentIndex,
      commonName
    ]
  );

  return (
    <Form.Field
      name={commonName}
      render={({ field }) => {
        return (
          <Form.Item className="py-0">
            <Strategy
              label={t('feature-flags.variation')}
              rootName={commonName}
              strategyName="rolloutStrategy"
              percentageValueCount={percentageValueCount}
              variationOptions={variationOptions}
              handleSelectStrategy={item =>
                handleSelectStrategy(item, field.onChange)
              }
            />
          </Form.Item>
        );
      }}
    />
  );
};

export default SegmentVariation;
