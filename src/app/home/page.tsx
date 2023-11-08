import Image from 'next/image';
import wallLoginpage from './../../../public/assets/wallLoginpage.jpg';
import { InputText } from '@/components/input/Input';
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Login'
}

export default function LoginPage() {
  return (
    <div className="relative">

      <div className="flex">
        <div className="w-1/2 p-8 ml-20 mt-40">
          <h1 className="text-gray-700 font-sans text-4xl font-bold whitespace-no-wrap">Núcleo De Umbanda Sagrada</h1>
          <p className="max-w-md text-gray-500 mb-4 mt-6">Faça login ou registre-se para começar a utilizar a plataforma</p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">E-mail</label>
              <InputText placeholder="Digite seu e-mail" type="email" />

            </div>
            <div className="mb-2">
              <div className="flex items-center justify-between w-96">
                <label className="text-sm font-medium text-gray-600 mr-2 mb-2">Senha</label>
                <a href="#" className="text-sm font-bold text-purple-600 mb-2">Esqueceu a senha?</a>
              </div>
              <InputText placeholder="Digite sua senha" type="password" />
            </div>

            <div className="mt-4">
              <button className="mt-2 w-96 p-4 px-6 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-500" type="submit">Entrar</button>
              <p className="mt-5 text-gray-600">Ainda não tem uma conta? <Link href="/register" className="text-purple-600 font-bold">Inscreva-se</Link></p>
            </div>

          </form>

        </div>
        <div className="w-1/2 screen overflow-hidden flex-1">
          <Image src={wallLoginpage} className="w-full h-screen object-cover" alt="Wallpaper"/>
        </div>

      </div>

    </div>
  );
}