import { redirect } from "next/navigation";
import { routes } from "@/lib/navigation";

export default function ProfileIndexPage() {
  redirect(routes.profile);
}
