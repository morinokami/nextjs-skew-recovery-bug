import { NextResponse, type NextRequest } from "next/server";

import { deploymentId } from "./deploymentId";

export function middleware(request: NextRequest) {
  const clientDeploymentId =
    request.nextUrl.searchParams.get("dpl") ||
    request.headers.get("x-deployment-id");

  const versionSkew = clientDeploymentId && clientDeploymentId !== deploymentId;
  const isAction = request.method === "POST" && request.headers.has("Next-Action");
  console.log("clientDeploymentId", clientDeploymentId);
  console.log("serverDeploymentId", deploymentId);
  console.log("isAction", isAction);
  if (versionSkew && isAction) {
    return new Response(
      "Version skew detected. Please refresh the page.",
      {
        status: 409,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "text/plain",
        },
      }
    );
  }
  return NextResponse.next();
}
