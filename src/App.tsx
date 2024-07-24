import { IonApp, IonContent, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import "./components/FabButton";
import FabButton from "./components/FabButton";
import { IonHeader } from "@ionic/react";
import TodoApp from "./components/TodoApp";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      {/* <IonHeader className="bg-slate-100 text-[primary]">
        Welcome to task app
      </IonHeader> */}
      <IonContent color="secondary" className="bg-transparent">
        <div className="flex items-center h-screen justify-center  bg-slate-100">
          <TodoApp task={[]}></TodoApp>
          {/*  <FabButton
          className="bottom-right-button"
          onClick={function (): void {
            console.log("sadasdfas");
          }}
        ></FabButton> */}
        </div>
      </IonContent>
    </IonApp>
  );
};

export default App;
