'use client'

import { Alimento } from "@/data/types/alimentos";
import React from "react";
import { useRouter } from "next/navigation";
import { deleteAlimento, editAlimento } from "../../api";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./modal";

interface alimentoProps {
    alimentos: Alimento
}

const Mantimentos: React.FC<alimentoProps> = ({alimentos}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(alimentos.quantidade);
  
    const handleSubmitEditAlimento: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await editAlimento({
        id: alimentos.id,
        nome: alimentos.nome,
        quantidade: taskToEdit,
        categoria: alimentos.categoria,
      });
      setOpenModalEdit(false);
      router.refresh();
    };
  
    const handleDeleteAlimento = async (id: string) => {
      await deleteAlimento(id);
      setOpenModalDeleted(false);
      router.refresh();
    };
    
    return (
        <tr key={alimentos.id}>
          <td className='w-full'>{alimentos.nome}</td>
          <td className='w-full'>{alimentos.quantidade}</td>
          <td className='w-full'>{alimentos.categoria}</td>
          <td className='flex gap-5'>
            <FiEdit
              onClick={() => setOpenModalEdit(true)}
              cursor='pointer'
              className='text-blue-500'
              size={25}
            />
            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
              <form onSubmit={handleSubmitEditAlimento}>
                <h3 className='font-bold text-lg'>Edit task</h3>
                <div className='modal-action'>
                  <input
                    value={taskToEdit}
                    onChange={(e) => setTaskToEdit(e.target.value)}
                    type='text'
                    placeholder='Type here'
                    className='input input-bordered w-full'
                  />
                  <button type='submit' className='btn'>
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
            <FiTrash2
              onClick={() => setOpenModalDeleted(true)}
              cursor='pointer'
              className='text-red-500'
              size={25}
            />
            <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
              <h3 className='text-lg'>
                Are you sure, you want to delete this task?
              </h3>
              <div className='modal-action'>
                <button onClick={() => handleDeleteAlimento(alimentos.id)} className='btn'>
                  Yes
                </button>
              </div>
            </Modal>
          </td>
        </tr>
      );
}

export default Mantimentos;