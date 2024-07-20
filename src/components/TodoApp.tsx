import {
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  ItemReorderEventDetail,
} from "@ionic/react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import { useState } from "react";
import { appsOutline, warning } from "ionicons/icons";
import Checkbox from "./CheckBox";
interface TaskItem {
  id: string; // Added unique id field
  title: string;
  isChecked: boolean;
  description: string | undefined;
}
interface TodoAppInterface {
  task: TaskItem[];
}

const TodoApp: React.FC<TodoAppInterface> = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<TaskItem[]>([
    {
      title: "Task 1",
      isChecked: false,
      description: undefined,
      id: "task-1",
    },
    {
      id: "task-2",
      title: "Task 2",
      isChecked: true,
      description: undefined,
    },
    {
      id: "task-3",
      title: "Task 3",
      isChecked: false,
      description: undefined,
    },
  ]);
  const addTask = () => {
    if (task.split(" ").join("") != "") {
      console.log("[ task]", task);

      const newTask: TaskItem = {
        id: `task-${taskList.length}-${Date.now()}`, // Generate a unique id
        title: task,
        isChecked: false,
        description: undefined,
      };
      console.log("[first newTask]", newTask);
      setTaskList([...taskList, newTask]);
      setTask("");

      console.log("[taskList]", taskList);
    }
  };

  const onDragEnd = (result: any) => {
    console.log("drag  finish");
    // if (!result.destination) return;
    // const items = Array.from(taskList);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);
    // setTaskList(items);
  };
  const [isDisabled, setIsDisabled] = useState(true);

  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log("Dragged from index", event.detail.from, "to", event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  function toggleReorder() {
    setIsDisabled((current) => !current);
  }

  return (
    <div className=" bg-white gap-4 h-screen">
      <TaskInput onClick={addTask} onChange={setTask} task={task} />

      {taskList.length == 0 && (
        <div className=" bg-white gap-2 rounded border-gray-400 border-2 flex justify-center border-dotted m-2 h-60 ">
          <div className="flex self-center w-full justify-center">
            <button disabled>
              <IonIcon size="medium" icon={warning}></IonIcon>
            </button>

            <IonLabel className="rounded bg-white border-none text-gray-700 leading-tight m-1 focus:outline-none focus:shadow-outline focus:border-[primary]">
              No Task Available
            </IonLabel>
          </div>
        </div>
      )}
      {taskList.length > 0 && (
        <IonList className="bg-white">
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            {taskList.map((task, index) => (
              <div className="flex justify-start" key={index}>
                <IonReorder key={"order-" + `${index}`}>
                  <button className="p-2">
                    <IonIcon
                      size="small"
                      style={{ color: "gray" }}
                      icon={appsOutline}
                    />
                  </button>
                </IonReorder>
                <TaskItem
                  key={"item-" + `${index}`}
                  title={task.title}
                  isChecked={task.isChecked}
                  description={task.description}
                />
              </div>
            ))}
          </IonReorderGroup>
        </IonList>
      )}
    </div>
  );
};

export default TodoApp;
