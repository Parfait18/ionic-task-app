import { IonIcon, IonInput } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

interface TaskInputProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange: (s: any) => void;
  task: string;
}
const TaskInput: React.FC<TaskInputProps> = ({ onClick, onChange, task }) => {
  return (
    <div className=" bg-white gap-2 rounded border-gray-400 border-2 flex justify-start border-dotted m-2">
      <button
        className="text-gray-700 font-bold w-12 p-2 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
        type="button"
        onClick={onClick}
      >
        <IonIcon size="medium" icon={add}></IonIcon>
      </button>
      <input
        type="text"
        value={task}
        className="rounded bg-white border-none text-gray-700 leading-tight w-4/5 m-1 focus:outline-none focus:shadow-outline focus:border-[primary]"
        placeholder="Enter your task"
        onChange={(e: any) => onChange(e.target.value!)}
      />
    </div>
  );
};

<style></style>;
export default TaskInput;
