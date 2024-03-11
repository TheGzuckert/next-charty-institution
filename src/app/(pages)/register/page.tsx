import { InputText } from '@/components/input/Input'
import { SlArrowRight } from 'react-icons/sl'
import Button from '@/components/button/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registro',
}

export default function RegisterPage() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex border border-solid border-gray-200">
        <form className="relative w-1/2 p-12">
          <div className="flex items-center justify-center w-96 p-1">
            <div className="flex items-center justify-center w-30">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-purple-800 rounded-full text-white">
                1
              </div>

              <p className="ml-2 mb-1 font-bold">Contato</p>

              <div className="ml-2 flex items-center">
                <SlArrowRight />
              </div>
            </div>

            <div className="flex items-center justify-center w-96">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-gray-300 rounded-full text-gray-400">
                2
              </div>

              <p className="ml-2 mb-1">Renda</p>

              <div className="ml-2 flex items-center">
                <SlArrowRight />
              </div>
            </div>

            <div className="flex items-center justify-center w-30">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-gray-300 rounded-full text-gray-400">
                3
              </div>
              <p className="ml-2 mb-1">Sobre</p>
            </div>
          </div>
          <hr className="w-96 mb-6 mt-6"></hr>

          <div className="mb-2">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Nome
            </label>
            <InputText
              placeholder="Digite seu número de WhatsApp"
              type="text"
            />
          </div>

          <div className="mb-2 mt-4">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Telefone
            </label>
            <InputText
              placeholder="Digite seu número de WhatsApp"
              type="text"
            />
          </div>

          <div className="mb-2 mt-4">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Email
            </label>
            <InputText placeholder="Digite seu e-mail" type="email" />
          </div>

          <div className="mb-2 mt-4">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">
              Senha
            </label>
            <InputText placeholder="Digite uma senha" type="password" />
          </div>

          <Button href="/register/info" buttonText="CONTINUAR" />
        </form>
      </div>
    </section>
  )
}
