import { IonIcon } from "@ionic/react";
import { appsOutline, ellipsisVerticalOutline } from "ionicons/icons";
import Checkbox from "./CheckBox";
import { useId, useState } from "react";
interface TaskItemProps {
  title: string;
  isChecked: boolean | false;
  description: string | undefined;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, isChecked }) => {
  const [checked, setCheked] = useState(isChecked);

  return (
    <div className="flex w-full gap-3 bg-white p-2 justify-between hover:cursor-pointer h-10 hover:bg-slate-50">
      {/* <div className="flex justify-start gap-2">
        <IonIcon size="small" style={{ color: "gray" }} icon={appsOutline} />
      </div> */}
      <Checkbox isChecked={checked} onChange={setCheked} />
      <p className="text-gray-600 text-start w-full text-ellipsis overflow-hidden">
        {title}
      </p>

      <IonIcon
        size="small"
        style={{ color: "gray" }}
        icon={ellipsisVerticalOutline}
      />
    </div>
  );
};

export default TaskItem;
