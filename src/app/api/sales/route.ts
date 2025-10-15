import { NextResponse } from "next/server";
import { salesByYear } from "@/data/sales";

export async function GET() {
  // In a real app, you'd fetch from a database or external API here
  return NextResponse.json({ data: salesByYear });
}
