'use client'

import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { addRegisterUser } from "../../api";
import { v4 as uuidv4 } from "uuid";

const  AddUser = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<string>('');

  const handleSubmitNewUser: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addRegisterUser({
      id: uuidv4(),
      name: newUser,
      email: '',
      phone: '',
      password: '',
    });
    setNewUser('');
    router.refresh();
  }
}

export default AddUser;

