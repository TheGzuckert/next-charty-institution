import Button from "@/components/button/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tipo de Usuário'
}

export default function LoginPage() {
  return (
    <section className="flex items-center justify-center h-screen">

      <div className="flex border border-solid border-gray-200">

        <form className="relative w-1/2 p-12">

          <div className="items-center justify-center w-60">
            
            <label className="flex space-x-4 ml-3.5 items-center text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Que tipo de usuário é você?
            </label>

            <div className="flex space-x-4 mt-3">
              <Button href="/register" buttonText="AJUDADO" />
              <Button href="/admin" buttonText="EMPRESA" />
            </div>

          </div>

        </form>

      </div>
    </section>
  );
}
