import { createUnplugin } from 'unplugin'
import { type Options, resolveOption } from './core/options'
import { pregQuote } from './utils/regex'

export default createUnplugin<Options | undefined>((rawOptions = {}) => {
  const options = resolveOption(rawOptions);
  const name = 'unplugin-module-resolver';

  return {
    name,
    resolveId(source: string) {
      if (!source.startsWith(options.prefix)) {
        return null;
      }

      const modulePath = source.replace(
        new RegExp(`^${pregQuote(options.prefix)}(${options.moduleRegex})`),
        `${options.target}/$1/${options.assetsDir}`
      );

      return { id: modulePath, external: options.external };
    },
  };
})
