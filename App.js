import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import styles from './components/estilos.js/styles';
import Drinks from './components/drinks';
import Comprar from './components/comprar';
import Carrinho from './components/carrinho';

export default function App() {
  const [window, newWindow] = useState(false);
  const [name, setName] = useState('');
  const [windowcar, newWindowcar] = useState(false);
  const [listcar, newListcar] = useState('');
  const[noremoveditems,newnoRemoveditems]=useState("")
  const[isremoved,newIsremoved]=useState(false)


  function paiComponent(content) {
    newWindow(content);
  }
  function takenameprodu(name) {
    setName(name);
  }
  function removing(product){
newnoRemoveditems(product)
  }

  function openwindowcar(boolean,lists) {
    newWindowcar(boolean);
    newListcar(lists);
  }
  function removequestion(bollean){
newIsremoved(bollean)
  }
 
 
  return (
    <View style={styles.container}>
      <Drinks
        Dadfunc={paiComponent}
        handlename={takenameprodu}
        Openwindowcar={openwindowcar}
        noremoveditems={noremoveditems}
        isremoved={isremoved}
      
     
      />
      {window ? <Comprar func={paiComponent} /> : undefined}
       {windowcar ? <Carrinho  windowcar={newWindowcar} List={listcar} isremoved={removequestion}  removing={removing}/> : undefined}

     
    </View>
  );
}
// <Carrinho  windowcar={newWindowcar} List={listcar} />


