"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function claimCertificate(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const certificateId = formData.get("certificateId") as string;

  if (!certificateId) {
    return { error: "Certificate ID is required." };
  }

  // Call our Postgres secure claim RPC
  const { data, error } = await supabase.rpc("claim_sister_certificate", {
    p_certificate_id: certificateId,
  });

  if (error) {
    return { error: error.message };
  }

  const result = data as { success: boolean; message: string };

  if (!result.success) {
    return { error: result.message };
  }

  revalidatePath("/talent");
  return { success: result.message };
}
