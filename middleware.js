import { NextResponse } from "next/server";
import {APP_TOKEN} from '@/env'
export function middleware(request) {
  const token = request.headers.get("x-api-token");

  if (!token || token !== APP_TOKEN) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:timezone*"],
};