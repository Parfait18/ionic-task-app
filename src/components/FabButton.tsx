import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { add, colorPalette, document, settings } from "ionicons/icons";

interface ButtonProps {
  className: string | undefined;
  onClick: () => void;
}

const FabButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <IonFab className={className}>
      <IonFabButton size="small" onClick={onClick}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon icon={document}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={colorPalette}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={settings}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};
export default FabButton;
