import { defineConfig } from 'vitest/config';

const srcFileGlob = '*.ts';
const testFileGlob = '*.test.ts';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: [`src/**/${testFileGlob}`],
    watchExclude: ['**/node_modules/*', '**/dist/*'],
    coverage: {
      enabled: true,
      all: true,
      include: [`src/**/${srcFileGlob}`],
      exclude: [`**/${testFileGlob}`, '**/*.d.ts', 'src/types/*']
    }
  }
});
