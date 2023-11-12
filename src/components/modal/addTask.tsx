'use client'

import Modal from "./modal";
import { FormEventHandler, useState } from "react";
import { addAlimento } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newAlimento, setNewAlimento] = useState<string>('');

    const handleSubmitNewAlimento: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await addAlimento({
        id: uuidv4(),
        nome: newAlimento,
        quantidade: '',
        categoria: '',
      });
      setNewAlimento("");
      setModalOpen(false);
      router.refresh();
    };


    return (
        <div>
          <button 
            onClick={() => setModalOpen(true)}
            className="btn btn-primary btn-circle">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </button>
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewAlimento}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              value={newAlimento}
              onChange={(e) => setNewAlimento(e.target.value)}
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
      </div>
    );
}

export default AddTask;