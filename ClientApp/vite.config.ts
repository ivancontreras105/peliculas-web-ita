import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        emptyOutDir: true,
        rolldownOptions: {
            output: {
                entryFileNames: "[name].js",
                dir: path.resolve(__dirname, "../wwwroot/app")
            },
            input: {
                "home/index": path.resolve(__dirname, "src/components/home/Page_Index.tsx"),
                "peliculas/editar": path.resolve(__dirname, "src/components/peliculas/Page_Editar.tsx")
            }
        }
    }
});