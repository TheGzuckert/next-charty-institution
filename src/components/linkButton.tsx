import Link from 'next/link';

interface Props {
  href: string;
}

export default function LinkButton({ href }: Props) {
  return (
    <div className="mt-8 flex items-center justify-end w-96">
      <Link href={href}>
        <>
          <button type="button" className="flex p-4 justify-center items-center space-x-2 rounded-md bg-purple-800 text-white font-bold">
            CONTINUAR
          </button>
        </>
      </Link>
    </div>
  );
}
