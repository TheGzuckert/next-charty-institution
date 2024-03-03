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
          <div className="w-96 mb-6 mt-6 mx-auto text-center">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Que tipo de usuário é você?
            </label>

            <div className="flex justify-between">

              <div>
                <Button href="/register" buttonText="EMPRESA" />
              </div>

              <div>
                <Button href="/admin" buttonText="USUÁRIO" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
