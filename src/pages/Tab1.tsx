import { IonButton, IonContent,IonInput, IonPage } from '@ionic/react';
import useCalculator from '../hooks/useCalculator';
import './Tab1.css';

const Tab1: React.FC = () => {

  const {
    number,
    result, 
    handleSetValue,
    onDelegateTarget, 
    operations,
    operationsShow
  } = useCalculator()
  return (
    <IonPage className='p-3'>
      <IonContent fullscreen>
      <IonInput 
        label="Ingresa tu numero" 
        labelPlacement="floating" 
        fill="outline" 
        placeholder="2 + 3"
        value={number}
        onIonInput={handleSetValue}
        type='number'
        ></IonInput>
        <div className='grid mt-2'>
          <IonButton className='btn' data-symbol="+" onClick={onDelegateTarget}>+</IonButton>
          <IonButton className='btn' data-symbol="-" onClick={onDelegateTarget}>-</IonButton>
          <IonButton className='btn' data-symbol="*" onClick={onDelegateTarget}>x</IonButton>
          <IonButton className='btn' data-symbol="/" onClick={onDelegateTarget}>÷</IonButton>
          <IonButton className='btn' data-symbol="=" onClick={onDelegateTarget}>=</IonButton>
          <IonButton className='btn' data-symbol="ce" onClick={onDelegateTarget}>CE</IonButton>
        </div>
        <h2>
          Operacion: 
          {
            operationsShow.map( (op:string) => (op))
          }
        </h2>
        <h2>Resultado: {result}</h2>
        <pre>
          {
            JSON.stringify( operations , null , 3)
          }
        </pre>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
