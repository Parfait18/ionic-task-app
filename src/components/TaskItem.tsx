import {
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
} from "@ionic/react";
import {
  arrowForward,
  chevronForward,
  pencil,
  pin,
  share,
  trash,
} from "ionicons/icons";
import Checkbox from "./CheckBox";
import { useId, useState } from "react";
interface TaskItemProps {
  title: string;
  isChecked: boolean | false;
  description: string | undefined;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, isChecked }) => {
  const [checked, setCheked] = useState(isChecked);
  const id = useId();

  return (
    <div className="flex w-full gap-1 justify-between max-h-fit ">
      {/* <div className="flex justify-start gap-2">
        <IonIcon size="small" style={{ color: "gray" }} icon={appsOutline} />
      </div> */}
      <IonItemSliding>
        <IonItem className=" w-full" lines="none" button={true}>
          <Checkbox isChecked={checked} onChange={setCheked} />
          <label
            className={
              checked
                ? "text-gray-600 line-through text-start w-full text-ellipsis overflow-hidden p-1"
                : "text-gray-600 text-start w-full text-ellipsis overflow-hidden p-1"
            }
          >
            {title}
          </label>
          <IonIcon
            size="small"
            style={{ color: "gray" }}
            icon={chevronForward}
          ></IonIcon>
          {/* <IonIcon
            id={id}
            className="hover:cursor-pointer"
            size="small"
            style={{ color: "gray" }}
            icon={}
          /> */}
        </IonItem>
        <IonItemOptions slot="end" className="bg-slate-200 shadow">
          <IonItemOption className="bg-slate-200">
            <IonIcon
              slot="icon-only"
              size="small"
              icon={pencil}
              color="light"
            ></IonIcon>
          </IonItemOption>
          <IonItemOption className="bg-slate-200">
            <IonIcon
              slot="icon-only"
              size="small"
              icon={trash}
              color="danger"
            ></IonIcon>
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </div>
  );
};

export default TaskItem;
