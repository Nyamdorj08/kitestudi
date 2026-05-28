// ----------------------------------------------------------------------

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    const msg = error.message;
    if (typeof msg === 'string' && msg.length > 0) return msg;
    return error.name || 'Алдаа гарлаа';
  }

  if (typeof error === 'string') return error;

  if (typeof error === 'object' && error !== null) {
    const msg = (error as Record<string, unknown>).message;
    if (typeof msg === 'string' && msg.length > 0) return msg;
  }

  return 'Алдаа гарлаа';
}
