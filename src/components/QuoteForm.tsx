import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Check, Loader2 } from 'lucide-react';
import { contact, emailConfig } from '../lib/content';
import { easeOut } from '../lib/motion';

const { form } = contact;

type FieldName = 'name' | 'phone' | 'city' | 'systemType' | 'message';
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: Record<FieldName, string> = {
  name: '',
  phone: '',
  city: '',
  systemType: '',
  message: '',
};

const PHONE = /^(\+91)?[6-9]\d{9}$/;

function validateField(field: FieldName, value: string): string | undefined {
  const trimmed = value.trim();
  switch (field) {
    case 'name':
      return trimmed ? undefined : form.validation.name;
    case 'phone':
      if (!trimmed) return form.validation.phoneEmpty;
      return PHONE.test(trimmed.replace(/[\s-]/g, '')) ? undefined : form.validation.phoneInvalid;
    case 'city':
      return trimmed ? undefined : form.validation.city;
    case 'systemType':
      return trimmed ? undefined : form.validation.systemType;
    default:
      return undefined;
  }
}

const inputClass =
  'w-full rounded-control border border-line-subtle bg-ink-800 px-4 py-3 font-sans text-body text-fg-primary placeholder:text-fg-muted transition-colors duration-200 hover:border-line focus:border-amber-400';

export function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const setField = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  const onBlur = (field: FieldName) => {
    const message = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const next: Errors = {};
    (['name', 'phone', 'city', 'systemType'] as FieldName[]).forEach((field) => {
      const message = validateField(field, values[field]);
      if (message) next[field] = message;
    });
    setErrors(next);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      if (Object.values(emailConfig).some((value) => value.includes('REPLACE_WITH'))) {
        throw new Error('EmailJS service/template/public key not set in lib/content.ts');
      }

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: values.name,
          phone: values.phone,
          city: values.city,
          system_type: values.systemType,
          message: values.message,
        },
        { publicKey: emailConfig.publicKey },
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        className="rounded-card border border-lime-400/40 bg-ink-850 p-8 md:p-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-pill border border-lime-400/50">
          <Check strokeWidth={1.5} size={20} className="text-lime-400" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-display-md text-fg-primary">{form.success.heading}</h3>
        <p className="measure mt-4 text-body-lg text-fg-secondary">{form.success.body}</p>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {status === 'error' && (
        <p role="alert" className="rounded-control border border-amber-400/50 bg-amber-400/[0.07] px-4 py-3 text-body text-amber-100">
          {form.failure}
        </p>
      )}

      <Field name="name" label={form.fields.name.label} error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={form.fields.name.placeholder}
          value={values.name}
          onChange={(e) => setField('name', e.target.value)}
          onBlur={() => onBlur('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field name="phone" label={form.fields.phone.label} error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={form.fields.phone.placeholder}
            value={values.phone}
            onChange={(e) => setField('phone', e.target.value)}
            onBlur={() => onBlur('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputClass} font-mono`}
          />
        </Field>

        <Field name="city" label={form.fields.city.label} error={errors.city}>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder={form.fields.city.placeholder}
            value={values.city}
            onChange={(e) => setField('city', e.target.value)}
            onBlur={() => onBlur('city')}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? 'city-error' : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field name="systemType" label={form.fields.systemType.label} error={errors.systemType}>
        <select
          id="systemType"
          name="systemType"
          value={values.systemType}
          onChange={(e) => setField('systemType', e.target.value)}
          onBlur={() => onBlur('systemType')}
          aria-invalid={Boolean(errors.systemType)}
          aria-describedby={errors.systemType ? 'systemType-error' : undefined}
          className={inputClass}
        >
          <option value="">Select one</option>
          {form.systemTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field name="message" label={form.fields.message.label} optional>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={form.fields.message.placeholder}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" disabled={status === 'submitting'} className="btn-amber disabled:opacity-70">
          {status === 'submitting' && <Loader2 strokeWidth={1.5} size={18} className="animate-spin" aria-hidden="true" />}
          {status === 'submitting' ? form.submitting : form.submit}
        </button>
        <p className="max-w-[34ch] text-caption text-fg-muted">{form.privacy}</p>
      </div>
    </form>
  );
}

interface FieldProps {
  name: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({ name, label, error, optional, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="flex items-baseline gap-2 text-caption font-medium text-fg-secondary">
        {label}
        {optional && <span className="text-fg-muted">optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-caption text-amber-300">
          {error}
        </p>
      )}
    </div>
  );
}
