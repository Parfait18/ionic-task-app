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
  id: string;
  title: string;
  isChecked: boolean;
  description: string | undefined;
}
interface TodoAppInterface {
  tasks: TaskItem[];
}

const TodoApp: React.FC<TodoAppInterface> = ({ tasks }) => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<TaskItem[]>(tasks);
  const addTask = () => {
    // check if task input content is not empty or contain space only
    if (task.split(" ").join("") != "") {
      console.log("[ task]", task);

      const newTask: TaskItem = {
        id: `task-${taskList.length}-${Date.now()}`, // Generate a unique id
        title: task,
        isChecked: false,
        description: undefined,
      };
      setTaskList([...taskList, newTask]);
      setTask("");
    }
  };

  const [isDisabled, setIsDisabled] = useState(true);
  const removeTask = (id: string) => {
    console.log("taskList", taskList);
    setTaskList(taskList.filter((task) => task.id !== id));
    console.log("after taskList", taskList);

    console.log("remove is called", id);
  };

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
        <div className=" bg-white gap-2 rounded border-gray-400 border-2 flex justify-center border-dotted h-60 m-2">
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
                  key={"task-" + `${index}`}
                  title={task.title}
                  id={task.id}
                  isChecked={task.isChecked}
                  description={task.description}
                  onDelete={removeTask}
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
