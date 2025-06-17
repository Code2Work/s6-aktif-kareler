import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Reporter from "./src/tests/reporter.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    reporters: [[
      "default",
      {
        "summary": false,
      },
    ], new Reporter()],
  },
});
