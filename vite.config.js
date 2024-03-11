import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { exec } from 'child_process';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Виконати команду запуску сервера в режимі розробки (serve)
    exec('node server.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting the server: ${error}`);
        return;
      }
      console.log(`Server is running: ${stdout}`);
    });
  }

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
