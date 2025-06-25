import { NextRequest } from "next/server";
import { middleware } from "./middleware";

function createMockRequest(url: string, headers?: Record<string, string>) {
  const req = new NextRequest(new URL(url), {
    headers: new Headers(headers),
  });
  return req;
}

describe("middleware theme cookie behavior", () => {
  it("sets cookies for SSR with ?theme=dark", async () => {
    const req = createMockRequest("/?theme=dark");
    const res = await middleware(req);
    console.log("Response cookies:", res.cookies.get("theme")?.value);

    expect(res.cookies.get("theme")?.value).toBe("dark");
  });
});
