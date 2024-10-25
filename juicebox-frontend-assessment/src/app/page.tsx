import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/homepage');
  return null;
}