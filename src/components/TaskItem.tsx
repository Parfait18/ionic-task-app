import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonModal,
  IonTitle,
  IonToolbar,
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
import { useId, useRef, useState } from "react";
import TaskInput from "./TaskInput";
import { IonInput } from "@ionic/react";
interface TaskItemProps {
  id: string;
  title: string;
  isChecked: boolean | false;
  description: string | undefined;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  isChecked,
  id,
  onDelete,
  onUpdate,
}) => {
  const [checked, setCheked] = useState(isChecked);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);
  const [editTile, setEditTitle] = useState(title);
  const handleDelete = () => {
    setShowAlert(true);
  };

  function onEditTitleChanged(value: string | number | null | undefined): void {
    // e.detail.value != null &&
    //   e.detail.value != undefined &&
    //   // e.detail.value.split(" ").join("") != "" &&
    //   setEditTitle(e.detail.value);
  }

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
          <IonItemOption className="bg-slate-200" id="open-modal">
            <IonIcon
              onClick={() => {
                setShowModal(true);
              }}
              id="open-modal"
              slot="icon-only"
              size="small"
              color="success"
              icon={pencil}
            ></IonIcon>
          </IonItemOption>
          <IonItemOption className="bg-slate-200">
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
              cssClass: "alert-cancel",
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

      {showModal && (
        <IonModal
          id="edit-modal"
          isOpen={showModal}
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={1}
          breakpoints={[0, 1]}
          onDidDismiss={() => setShowModal(false)}
        >
          <IonHeader className="mt-2">
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Close
                </IonButton>
              </IonButtons>
              <IonTitle className="text-gray-600"> Edit Task</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => {
                    onUpdate(id, editTile);
                    modal.current?.dismiss();
                  }}
                >
                  Ok
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="bg-slate-50 flex justify-center items-center p-2 w-auto">
            <div className="p-2">
              <IonInput
                type="text"
                value={editTile}
                onIonInput={(e) =>
                  e.detail.value != null &&
                  e.detail.value != undefined &&
                  e.detail.value.split(" ").join("") != "" &&
                  setEditTitle(e.detail.value)
                }
                className=" bg-white border-b border-b-gray-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </IonContent>
        </IonModal>
      )}
    </div>
  );
};

export default TaskItem;
