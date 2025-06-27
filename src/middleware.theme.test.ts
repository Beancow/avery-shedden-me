/**
 * @jest-environment node
 */

import { NextRequest } from "next/server";
import { middleware } from "./middleware";

function createMockRequest(
  url: string,
  headers?: Record<string, string>,
  cookies?: Record<string, string>[]
) {
  const req = new NextRequest(new URL(`http://localhost:3000${url}`), {
    headers: new Headers(headers),
  });

  if (cookies) {
    cookies.forEach(({ name, value }) => {
      req.cookies.set(name, value);
    });
  }

  return req;
}

describe("theme parameter handling (sets cookie and redirects)", () => {
  it("sets cookie and redirects for ?theme=dark when no current cookie is set", async () => {
    const req = createMockRequest("/?theme=dark");
    const res = await middleware(req);

    expect(req.cookies.get("theme")).toBeUndefined();
    expect(res.cookies.get("theme")?.value).toBe("dark");
    expect(res.status).toBe(307);
    expect(res.headers.get("Location")).toBe("http://localhost:3000/");
  });
  it("Does not update cookie and does not redirect when ?theme=<value=existingCookie>", async () => {
    const req = createMockRequest("/?theme=light", undefined, [
      { name: "theme", value: "light" },
    ]);

    console.log("Request Cookies:", req.cookies.get("theme"));

    const res = await middleware(req);

    expect(res.cookies.get("theme")?.value).toBe(undefined);
    expect(res.status).not.toBe(307);
    expect(res.url.endsWith("?theme=light")).toBe(false);
  });
  it("Does update cookie and redirect when ?theme=<value!=existingCookie>", async () => {
    const req = createMockRequest("/?theme=dark", undefined, [
      { name: "theme", value: "light" },
    ]);

    console.log("Request Cookies:", req.cookies.get("theme"));

    const res = await middleware(req);

    expect(res.cookies.get("theme")?.value).toBe("dark");
    expect(res.status).toBe(307);
    expect(res.url.endsWith("?theme=dark")).toBe(false);
  });
});
