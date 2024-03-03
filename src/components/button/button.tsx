import Link from 'next/link';
import { CSSProperties } from 'react';

interface Props {
  href: string;
  buttonText?:string;
}

export default function Button({ href, buttonText }: Props) {
  return (
    <div className="mt-8 flex items-center justify-end w-96">
      <Link href={href}>
        <>
          <button type="button" className="flex p-4 justify-center items-center space-x-2 rounded-md bg-purple-800 text-white font-bold">
            {buttonText}
          </button>
        </>
      </Link>
    </div>
  );
}
