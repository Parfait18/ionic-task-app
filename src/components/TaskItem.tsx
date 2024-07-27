import {
  IonAlert,
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
  id: string;
  title: string;
  isChecked: boolean | false;
  description: string | undefined;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  isChecked,
  id,
  onDelete,
}) => {
  const [checked, setCheked] = useState(isChecked);
  const [showAlert, setShowAlert] = useState(false);
  const custumId = useId();

  const handleDelete = () => {
    setShowAlert(true);
  };

  return (
    <div className="flex w-full gap-1 justify-between max-h-fit ">
      {/* <div className="flex justify-start gap-2">
        <IonIcon size="small" style={{ color: "gray" }} icon={appsOutline} />
      </div> */}
      <IonItemSliding>
        <IonItem className=" w-full" lines="none" button={true} detail={false}>
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
              color="success"
              icon={pencil}
            ></IonIcon>
          </IonItemOption>
          <IonItemOption
            className="bg-slate-200"
            onClick={() => setShowAlert(true)}
          >
            <IonIcon
              onClick={() => setShowAlert(true)}
              slot="icon-only"
              size="small"
              id="present-alert"
              icon={trash}
              color="danger"
            ></IonIcon>
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {showAlert && (
        <IonAlert
          className="text-gray-500"
          isOpen={showAlert}
          header="Are you sure you want to delete this task ?"
          trigger="present-alert"
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                console.log("Alert canceled");
                setShowAlert(false);
              },
            },
            {
              text: "OK",
              role: "confirm",
              handler: () => onDelete(id),
            },
          ]}
          onDidDismiss={() => setShowAlert(false)}
        ></IonAlert>
      )}
    </div>
  );
};

export default TaskItem;
