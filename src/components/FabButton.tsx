import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  add,
  arrowBackCircle,
  arrowDownCircleOutline,
  arrowRedoCircle,
  arrowUpLeftBoxOutline,
  colorPalette,
  document,
  refreshCircle,
  settings,
} from "ionicons/icons";

interface ButtonProps {
  className: string | undefined;
  onClick: () => void;
  onRefresh: () => void;
}

const FabButton: React.FC<ButtonProps> = ({
  className,
  onClick,
  onRefresh,
}) => {
  return (
    <IonFab className={className}>
      <IonFabButton size="small" color="info" onClick={onClick}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={onRefresh}>
          <IonIcon color="info" icon={refreshCircle}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon color="warning" icon={settings}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};
export default FabButton;
