export interface Options {
  /**
   * Module import prefix.
   *
   * @default '@modules/'
   */
  prefix?: string

  /**
   * Module target directory.
   *
   * @default './modules'
   */
  target?: string

  /**
   * Assets directory in the module.
   *
   * @default 'Resources/js'
   */
  assetsDir?: string

  /**
   * Regex used to match module name.
   *
   * @default '\w+'
   */
  moduleRegex?: string

  /**
   * External module ids.
   *
   * @default 'absolute'
   */
  external?: boolean
}

export type OptionsResolved = Omit<Required<Options>, 'external'> & {
  external?: boolean
}

export function resolveOption(options: Options): OptionsResolved {
  return {
    prefix: options.prefix ?? '@modules/',
    target: options.target ?? './modules',
    assetsDir: options.assetsDir ?? 'Resources/js',
    moduleRegex: options.moduleRegex ?? '\\w+',
  }
}
