export function pregQuote(str: string, delimiter = '/') {
  // Quote regular expression characters plus an optional character
  //
  // version: 1107.2516
  // discuss at: http://phpjs.org/functions/preg_quote
  // +   original by: booeyOH
  // +   improved by: Ates Goal (http://magnetiq.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: preg_quote("$40");
  // *     returns 1: '\$40'
  // *     example 2: preg_quote("*RRRING* Hello?");
  // *     returns 2: '\*RRRING\* Hello\?'
  // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
  // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
  // noinspection RegExpRedundantEscape
  return `${str}`.replaceAll(
    new RegExp(`[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\${delimiter || ''}-]`, 'g'),
    '\\$&'
  )
}
