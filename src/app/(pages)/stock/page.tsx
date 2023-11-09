import AddTask from "@/components/addTask";
import ListaMant from "@/components/listaMant";
import { getAllAlimentos } from "../../../../api";

export default async function Home() {
  const alimentos = await getAllAlimentos();
  console.log(alimentos);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Listinha
        </h1>
        < AddTask />
      </div>
      < ListaMant alimentos={alimentos} />
    </main>
  )
}
