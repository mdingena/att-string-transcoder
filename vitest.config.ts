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
      reportOnFailure: false,
      skipFull: true,
      100: true,
      include: [`src/**/${srcFileGlob}`],
      exclude: [`**/${testFileGlob}`, '**/*.d.ts', 'src/index.ts', 'src/types/*']
    }
  }
});
