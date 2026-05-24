"use client";

import { useActionState } from "react";
import { claimCertificate } from "@/app/talent/actions";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";

export function CertificateClaimForm() {
  const [state, formAction, isPending] = useActionState(claimCertificate, null);

  return (
    <article className="card-interactive p-6 border-dashed border-secondary/30 bg-secondary-container/5">
      <h2 className="font-display text-xl font-bold text-primary flex items-center gap-2">
        <Icon name="workspace_premium" className="text-secondary" />
        Claim Your Bridge Badge
      </h2>
      <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
        Completed your 4-week cohort training at our partner academy? Enter your
        unique **Certificate ID** below to verify and activate your gold elite status
        instantly! Try using the test seed ID: <code className="bg-surface-container px-1.5 py-0.5 rounded font-mono text-secondary">BRIDGE-TEST-COHORT</code>
      </p>

      {state?.error && (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-error-container/20 border border-error/20 p-3.5 text-xs text-error">
          <Icon name="error" className="shrink-0 text-base" />
          <span>{state.error}</span>
        </div>
      )}

      {state?.success && (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-secondary-container/20 border border-secondary/20 p-3.5 text-xs text-secondary">
          <Icon name="check_circle" className="shrink-0 text-base" />
          <span>{state.success}</span>
        </div>
      )}

      <form action={formAction} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="certificateId"
          required
          placeholder="e.g. BRIDGE-TEST-COHORT"
          className="flex-grow rounded-xl border border-outline-variant bg-white px-4 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
        />
        <Button
          type="submit"
          disabled={isPending}
          variant="secondary"
          size="sm"
          className="whitespace-nowrap"
        >
          {isPending ? "Verifying..." : "Verify Certificate"}
        </Button>
      </form>
    </article>
  );
}
