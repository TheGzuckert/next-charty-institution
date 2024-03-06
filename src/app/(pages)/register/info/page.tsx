import { InputText } from "@/components/input/Input";
import { SlArrowRight } from "react-icons/sl";
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

              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-custom-green rounded-full text-white">1</div>
              
              <p className="ml-2 mb-1 font-bold">
                Contato
              </p>

              <div className="ml-2 flex items-center">
                <SlArrowRight />
              </div>

            </div>

            <div className="flex items-center justify-center w-96">

              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-purple-800 rounded-full text-white">2</div>

              <p className="ml-2 mb-1">Renda</p>

              <div className="ml-2 flex items-center">
                <SlArrowRight />
              </div>
            </div>

            <div className="flex items-center justify-center w-96">

              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-gray-300 rounded-full text-gray-400">3</div>

              <p className="ml-2 mb-1">
                Sobre
              </p>

            </div>
          </div>

          <hr className="w-96 mb-6 mt-6"></hr>

          <div className="w-96 mb-6 mt-6">

            <label className="mt-8  text-gray-800 font-semibold font-ibm-plex-sans text-1 my-4">
              Qual é a renda familiar mensal per capita?
            </label>

            <InputText placeholder="Insira a renda aqui" type="text"/>

          </div>

          <div className="w-96 mb-6 mt-6">

            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Sua familia é composta de quantas pessoas?
            </label>

            <InputText placeholder="Insira o numero de familiares aqui" type="text" />

          </div>

          <div className="w-96 mb-6 mt-6">

            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Alguém  da sua familia é deficiente?
            </label>

            <InputText placeholder="Se sim, insira o nome da pessoa aqui" type="email" />

          </div>
          
          <div className="w-96 mb-6 mt-6">

            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Nos informe seu endereço
            </label>

            <InputText placeholder="Insira seu endereço aqui" type="text" />

          </div>

          <Button href="../register/info/about" buttonText="CONTINUAR"/>

        </form>
      </div>
      
    </section>
  );
}