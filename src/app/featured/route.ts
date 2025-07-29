import { redirect } from "next/navigation";

export async function GET() {
  // Default featured property redirect
  redirect("/featured/springfield-maple-street");
}