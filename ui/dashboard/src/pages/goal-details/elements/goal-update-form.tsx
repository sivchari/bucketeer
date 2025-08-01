import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { GoalUpdaterPayload } from '@api/goal/goal-updater';
import { yupResolver } from '@hookform/resolvers/yup';
import { getCurrentEnvironment, useAuth } from 'auth';
import useFormSchema, { FormSchemaProps } from 'hooks/use-form-schema';
import { useTranslation } from 'i18n';
import * as yup from 'yup';
import { Goal } from '@types';
import Button from 'components/button';
import Form from 'components/form';
import Input from 'components/input';
import TextArea from 'components/textarea';
import DisabledButtonTooltip from 'elements/disabled-button-tooltip';

export interface GoalDetailsForm {
  name: string;
  id: string;
  description?: string;
}

const formSchema = ({ requiredMessage }: FormSchemaProps) =>
  yup.object().shape({
    name: yup.string().required(requiredMessage),
    id: yup.string().required(requiredMessage),
    description: yup.string()
  });

const GoalUpdateForm = ({
  disabled,
  goal,
  onSubmit
}: {
  disabled: boolean;
  goal: Goal;
  onSubmit: (payload: GoalUpdaterPayload) => Promise<void>;
}) => {
  const { t } = useTranslation(['common', 'form']);

  const { consoleAccount } = useAuth();
  const currentEnvironment = getCurrentEnvironment(consoleAccount!);

  const form = useForm({
    resolver: yupResolver(useFormSchema(formSchema)),
    defaultValues: {
      name: goal.name,
      id: goal.id,
      description: goal.description
    }
  });

  const handleOnSubmit: SubmitHandler<GoalDetailsForm> = values =>
    onSubmit({
      ...values,
      environmentId: currentEnvironment.id
    }).finally(() =>
      form.reset({
        name: values.name,
        id: values.id,
        description: values.description
      })
    );

  const {
    formState: { isValid, isDirty, isSubmitting }
  } = form;

  return (
    <div className="p-5 shadow-card rounded-lg bg-white">
      <p className="text-gray-800 typo-head-bold-small">
        {t('form:general-info')}
      </p>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(handleOnSubmit)}>
          <Form.Field
            control={form.control}
            name="name"
            render={({ field }) => (
              <Form.Item>
                <Form.Label required>{t('name')}</Form.Label>
                <Form.Control>
                  <Input
                    disabled={disabled}
                    placeholder={`${t('form:placeholder-name')}`}
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="id"
            render={({ field }) => (
              <Form.Item>
                <Form.Label required>{t('form:goal-id')}</Form.Label>
                <Form.Control>
                  <Input
                    disabled
                    placeholder={`${t('form:placeholder-goal-id')}`}
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="description"
            render={({ field }) => (
              <Form.Item>
                <Form.Label optional>{t('form:description')}</Form.Label>
                <Form.Control>
                  <TextArea
                    disabled={disabled}
                    placeholder={t('form:placeholder-desc')}
                    rows={4}
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <DisabledButtonTooltip
            align="start"
            hidden={!disabled}
            trigger={
              <Button
                loading={isSubmitting}
                disabled={!isValid || !isDirty || disabled}
                type="submit"
                className="w-fit"
                variant={'secondary'}
              >
                {t(`save`)}
              </Button>
            }
          />
        </Form>
      </FormProvider>
    </div>
  );
};

export default GoalUpdateForm;
