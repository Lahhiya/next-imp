import { DynamicIcon } from "lucide-react/dynamic";

export default function Loading(){
    return (
      <div className="flex justify-center items-center min-h-32 w-100 h-auto mt-10 bg-slate-100 rounded-2xl">
        <DynamicIcon
          name="bolt"
          className="text-8xl animate-spin duration-150"
        />
        <p className="text-4xl animate-pulse duration-500">loading...</p>
      </div>
    );
}