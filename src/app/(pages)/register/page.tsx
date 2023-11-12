'use client'
import { InputText } from "@/components/input/Input";
import Image from "next/image";
import setaIcon from '../../../../public/assets/seta.svg';
import { Metadata } from "next";
import LinkButton from "@/components/linkButton/linkButton";
import { User } from "@/data/types/user";
import { useState } from "react";
import { addRegisterUser } from "../../../../api";


// export const metadata: Metadata = {
//   title: 'Cadastro'
// }

interface UserProps {
  user: User; 
}

export default function LoginPage({ user }: UserProps) {
  const [formData, setFormData] = useState(user)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newUser = await addRegisterUser(formData);
      console.log('Novo usuário cadastrado:', newUser);
      // Aqui você pode redirecionar para a próxima etapa ou fazer o que for necessário
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };


  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex border border-solid border-gray-200">
        <form className="relative w-1/2 p-12">

          <div className="flex items-center justify-center w-96 p-1">

            <div className="flex items-center justify-center w-96">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-purple-800 rounded-full text-white">1</div>
              <p className="ml-2 mb-1 font-bold">Contato</p>
              <Image src={setaIcon} width={20} height={20} alt="" />
            </div>

            <div className="flex items-center justify-center w-96">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-gray-300 rounded-full text-gray-400">2</div>
              <p className="ml-2 mb-1">Renda</p>
              <Image src={setaIcon} width={20} height={20} alt="" />
            </div>

            <div className="flex items-center justify-center w-96">
              <div className="mb-1 w-6 h-6 flex items-center justify-center font-semibold bg-gray-300 rounded-full text-gray-400">3</div>
              <p className="ml-2 mb-1">Sobre</p>
            </div>

          </div>
          <hr className="w-96 mb-6 mt-6"></hr>

          <div className="mb-2">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Nome</label>
            <InputText placeholder="Digite seu número de WhatsApp" type="text" onChange={(value) => console.log(value)} />
          </div>

          <div className="mb-2 mt-4">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Telefone</label>
            <InputText placeholder="Digite seu número de WhatsApp" type="text" onChange={(value) => console.log(value)} />
          </div>

          <div className="mb-2 mt-4">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Email</label>
            <InputText placeholder="Digite seu e-mail" type="email" />
          </div>
          
          <div className="mb-2 mt-4">
            <label className="space-x-1 mt-8 text-gray-800 font-semibold font-ibm-plex-sans text-1 leading-150">Senha</label>
            <InputText placeholder="Digite uma senha" type="password" onChange={(value) => console.log(value)} />
          </div>

          <LinkButton href="../profile"/>

        </form>
      </div>
    </section>
  );
}

