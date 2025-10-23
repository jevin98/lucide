import path from 'path';
import { pathToFileURL } from 'url';
import { readSvgDirectory } from '@lucide/helpers';
import { type Path } from '../types.ts';

async function getAliases(iconDirectory: Path) {
  const iconJsons = await readSvgDirectory(iconDirectory, '.json');
  const aliasesEntries = await Promise.all(
    iconJsons.map(async (jsonFile) => {
      const file = await import(pathToFileURL(path.join(iconDirectory, jsonFile)).href, {
        with: { type: 'json' },
      });
      return [path.basename(jsonFile, '.json'), file.default];
    }),
  );

  return Object.fromEntries(aliasesEntries);
}

export default getAliases;
