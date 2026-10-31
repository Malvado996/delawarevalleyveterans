"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  // Static site (GitHub Pages): there is no backend. Submissions are
  // validated client-side only and NOT sent anywhere yet.
  // TODO(contact): Wire this form to a third-party form service (e.g.
  // Formspree, Basin, Getform, or Web3Forms) by POSTing `values` to its
  // endpoint here, and add spam protection (honeypot / captcha).
  function onSubmit(values: ContactInput) {
    // TODO(contact): send `values` to the form service; on failure call
    // setStatus("error").
    void values;
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate aria-describedby="form-status">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-name">Name</FieldLabel>
              <Input
                {...field}
                id="contact-name"
                autoComplete="name"
                aria-invalid={fieldState.invalid}
                aria-required="true"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-email">Email</FieldLabel>
              <Input
                {...field}
                id="contact-email"
                type="email"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
                aria-required="true"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-message">Message</FieldLabel>
              <Textarea
                {...field}
                id="contact-message"
                rows={6}
                aria-invalid={fieldState.invalid}
                aria-required="true"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="h-11 px-6 text-base"
          >
            {form.formState.isSubmitting ? "Sending…" : "Send message"}
          </Button>
        </div>
        <div id="form-status" aria-live="polite">
          {status === "success" && (
            <p className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-800">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Thank you! Your message looks good. [Placeholder: online form delivery is not connected yet — please reach us at Contact email TBD.]
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="rounded-md bg-red-50 p-3 text-sm text-destructive">
              Sorry, something went wrong. Please try again later.
            </p>
          )}
        </div>
      </FieldGroup>
    </form>
  );
}
