// inspired by npm kebab-case repo
const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
const REVERSE_REGEX = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;

export function kebabCase(str: string): string {
    return str.replace(KEBAB_REGEX, function (match) {
        return '-' + match.toLowerCase();
    });
}

export function reverse(str: string): string {
    return str.replace(REVERSE_REGEX, function (match) {
        return match.slice(1).toUpperCase();
    });
}
