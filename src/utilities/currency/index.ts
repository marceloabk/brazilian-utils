type FormatOptions = {
  precistion?: number;
};

export function format(value: number, options: FormatOptions = { precistion: 2 }): string {
  return value
    .toFixed(options.precistion)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export function parse(value: string): number {
  return parseInt(value.replace(/\D/g, '') || '0', 10) / 100;
}
