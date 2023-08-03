declare module 'sqlstring' {
  export function escape(value: any): string;
  export function escapeId(value: any): string;
  // Add other functions if needed...
}
