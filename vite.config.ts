import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import solid from "vite-plugin-solid";

const SUPPORT_LEGACY = false;

const createConfig = {
  esbuild: {
    target: "es2015",
    include: /\.(ts|jsx|tsx)$/,
  },
  build: {
    target: "es2015",
  },
  plugins: [solid()],
};

if (SUPPORT_LEGACY) {
  const addLegacy: any = legacy({
    // to be compatible with legacy browsers
    targets: ["ie >= 11"],
    // generate legacy browser's chunks
    renderLegacyChunks: true,
    /**
     * auto detect
     */
    modernPolyfills: true,
    /**
     * or add manually, for examples
     */
    // for legacy browsers only
    // polyfills: ['es/global-this', 'es/array/includes'],
    // for modern browsers only
    // modernPolyfills: ['es/global-this'],
  });
  createConfig.plugins.push(addLegacy);
}

export default defineConfig(createConfig);
