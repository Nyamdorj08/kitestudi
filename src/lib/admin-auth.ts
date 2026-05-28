import { createHmac } from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'admin_session';

function getExpectedToken(): string {
  return createHmac('sha256', process.env.ADMIN_SESSION_SECRET!)
    .update(process.env.ADMIN_PASSWORD!)
    .digest('hex');
}

export function verifyAdminPassword(password: string): boolean {
  return password === process.env.ADMIN_PASSWORD;
}

export function getSessionToken(): string {
  return getExpectedToken();
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token === getExpectedToken();
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
