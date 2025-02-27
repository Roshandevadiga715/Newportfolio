import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Newportfolio/",  // 👈 Add this line (your repo name)
  plugins: [react()],
});
