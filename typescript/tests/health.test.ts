import { test } from "node:test";
import assert from "node:assert/strict";
import { app } from "../src/app.ts";

test("health", async () => {
  const server = app.listen(0);
  const { port } = server.address() as { port: number };
  try {
    const r = await fetch(`http://127.0.0.1:${port}/health`);
    assert.equal(r.status, 200);
    assert.deepEqual(await r.json(), { ok: true });
  } finally {
    server.close();
  }
});
