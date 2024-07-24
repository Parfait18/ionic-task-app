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
import { appsOutline, help, warning } from "ionicons/icons";
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

    // Move the item in the array
    const items = taskList;
    const [movedItem] = items.splice(event.detail.from, 1);
    items.splice(event.detail.to, 0, movedItem);

    // Update the local state with the new array
    setTaskList(items);

    // Complete the reorder process
    event.detail.complete();

    // Save the new order to the server (if needed)
    // fetch('/tasks', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ order: items.map(item => item.id) }),
    // });
  }

  function toggleReorder() {
    setIsDisabled((current) => !current);
  }

  return (
    <div className=" bg-white gap-4 max-h-fit min-h-96 shadow w-96 border border-gray-200 rounded-md py-4 px-4">
      <div className="p-2">
        <h4 className="text-gray-800 font-bold my-1">
          Welcome to task manage app !
        </h4>
        <span className="text-xs text-gray-600 my-1">
          It's Tuesday, 22 July 2025
        </span>

        <div className="flex my-5 gap-2 bg-slate-200 border rounded-md border-gray-100 p-2 text-xs text-gray-700 text-justify">
          <div className="">
            <IonIcon
              src="/resources/icons/help.svg"
              className="custum-icon"
            ></IonIcon>
          </div>
          <span>
            Are tired of jugging multiple tasks and deadline? Our tasks manage
            app boost your productivity. Whether it's work-related projects,
            householders,yours covered.
          </span>
        </div>
      </div>
      <TaskInput onClick={addTask} onChange={setTask} task={task} />
      {taskList.length == 0 && (
        <div className=" bg-white gap-2 rounded border-gray-400 border-2 flex justify-center border-dotted h-60 ">
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
        <IonList className="bg-white my-2" inset={true}>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            {taskList.map((task, index) => (
              <div className="flex justify-start" key={index}>
                <IonReorder key={"order-" + `${index}`} className="">
                  <div className="vertical-center">
                    <IonIcon
                      size="small"
                      style={{ color: "gray" }}
                      icon={appsOutline}
                    />
                  </div>
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
