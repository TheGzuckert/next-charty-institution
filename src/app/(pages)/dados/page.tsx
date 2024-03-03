import { InputText } from "@/components/input/Input";
import Image from "next/image";
import setaIcon from '../../../../public/assets/seta.svg';
import { Metadata } from "next";
import Button from "@/components/button/button";

export const metadata: Metadata = {
  title: 'Cadastro'
}

export default function LoginPage() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex border border-solid border-gray-200">
        <form className="relative w-1/2 p-12">

          <div className="flex items-center justify-center w-96 p-1">

            <div className="flex items-center justify-center w-96">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-custom-green rounded-full text-gray-400">1</div>
              <p className="ml-2 mb-1 font-bold">Contato</p> {/* adicioanr icon check */}
              <Image src={setaIcon} width={20} height={20} alt="" />
            </div>

            <div className="flex items-center justify-center w-96">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-purple-800 rounded-full text-white">2</div>
              <p className="ml-2 mb-1">Dados</p>
              <Image src={setaIcon} width={20} height={20} alt="" />
            </div>

          </div>

          <hr className="w-96 mb-6 mt-6"></hr>

          <div className="w-96 mb-6 mt-6">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Qual função você tem  no nucleo?</label>
            <InputText placeholder="Insira sua função aqui" type="text" />
          </div>

          <div className="w-96 mb-6 mt-6">
            <label className="mt-8  text-gray-800 font-semibold font-ibm-plex-sans text-1 my-4">Faz parte de alguma empresa colaboradora?</label>
            <InputText placeholder="Insira o nome da empresa aqui" type="text"/>
          </div>


          <Button href="/" buttonText="FINALIZAR"/>

        </form>
      </div>
    </section>
  );
}