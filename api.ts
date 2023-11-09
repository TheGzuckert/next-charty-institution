import { Alimento } from "./src/data/types/alimentos";

const baseUrl = 'http://localhost:3001';

export const getAllAlimentos = async ():Promise<Alimento[]> => {
    const res = await fetch(`${baseUrl}/alimentos`, {cache: "no-store"});
    const alimentos = await res.json();
    return alimentos;
}

export const addAlimento = async (alimentos: Alimento): Promise<Alimento> => {
    const res = await fetch(`${baseUrl}/alimentos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alimentos)
    })
    const newAlimento = await res.json();
    return newAlimento;
  }

  export const editAlimento = async (alimentos: Alimento): Promise<Alimento> => {
    const res = await fetch(`${baseUrl}/alimentos/${alimentos.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(alimentos)
    })
    const updatedAlimento = await res.json();
    return updatedAlimento;
  }
  
  export const deleteAlimento = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/alimentos/${id}`, {
      method: 'DELETE',
    })
  }