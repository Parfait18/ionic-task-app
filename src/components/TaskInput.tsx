import { IonIcon, IonInput } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

interface TaskInputProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange: (s: any) => void;
  task: string;
}
const TaskInput: React.FC<TaskInputProps> = ({ onClick, onChange, task }) => {
  const handleKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (event.key === "Enter") {
      // event.preventDefault(); // Prevent the default action (e.g., form submission)
      console.log("adadasd");
      return onclick;
    }
  };
  return (
    <div className=" bg-white rounded border-gray-400 border-2 flex justify-start border-dotted m-2">
      <button
        className="text-gray-700 font-bold w-10 py-2 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
        type="button"
        onClick={onClick}
      >
        <IonIcon size="medium" icon={add}></IonIcon>
      </button>
      <input
        type="text"
        value={task}
        className="rounded bg-white border-none text-gray-700 leading-tight w-full m-1 focus:outline-none focus:shadow-outline focus:border-[primary]"
        placeholder="Enter your task"
        onKeyDown={handleKeyDown}
        onChange={(e: any) => onChange(e.target.value!)}
      />
    </div>
  );
};

<style></style>;
export default TaskInput;
