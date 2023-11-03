import { InputText } from '@/components/input/Input';

export default function LoginPage() {
  return (
    <section className="flex items-center justify-center h-screen">
      <hr></hr>
      <div className="flex border border-solid border-gray-200">
        <form className="relative w-1/2 p-8">
          <div className='mb-2'>
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Nome</label>
            <InputText placeholder="Como prefere ser chamado" type="text"/>
          </div>
          <div className="mb-2 mt-3">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Telefone</label>
            <InputText placeholder="Digite seu número de WhatsApp" type="text"/>
          </div>
          <div className="mb-2 mt-3">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Email</label>
            <InputText placeholder="Digite seu e-mail" type="email" />
          </div>
          <div className="mb-2 mt-3">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Senha</label>
            <InputText placeholder="Digite uma senha" type="password" />
          </div>
          <div className="ml-80">
            <button className="flex p-4 justify-center items-center space-x-2 rounded-md bg-purple-600 text-white font-bold">
              CONTINUAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}