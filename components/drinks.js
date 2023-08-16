import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Comprar from './comprar';
import { useState, useEffect } from 'react';
import react from 'react';
import styles from './estilos.js/styles';
export default function Drinks(props) {
  const [check, setCheck] = useState(false);
  const [stuffs, newStuff] = useState("");
  const [couterstuff, newCounter] = useState(0);
  const[attitems,setattitems]=useState([])

  const opencomprar = () => {
    setCheck(!check);
    props.Dadfunc(true);
  };

const filteremovrf=()=>{
 alert("essa função foi chamada")
  for(let i=0;i<stuffs.length;i++){
    for(let u=0;u<props.noremoveditems.length;u++){
      if(stuffs[i].id==props.noremoveditems[i].id){
        const array=[...attitems,stuffs[i]]
        setattitems(array)
    }
  }
}}
  

  const opencarrinho = () => {
   
     if(props.isremoved){
       filteremovrf()
     alert(attitems)
       newStuff(attitems)
       props.Openwindowcar(true,stuffs);
     } else props.Openwindowcar(true,stuffs);
     
    
 };


  const data = [
    {
      img: require("../imgs/cachaça.jpg"),
      id: 1,
      decrission:
        'A cachaça é uma aguardente brasileira feita da fermentação e destilação da cana-de-açúcar. Com variados estilos e sabores, é usada em coquetéis como a caipirinha, representando a cultura e tradição do Brasil.',
      preco: 159,
      product: 'cachaça',
    },
    {
      img: require("../imgs/jackdaniels.jpg"),
      id: 2,
      decrission:
        "O Jack Daniel's é um renomado whisky americano, produzido na destilaria de Lynchburg, Tennessee. Conhecido por seu processo de filtragem com carvão vegetal e envelhecimento em barris de carvalho,É um ícone da cultura americana e vem em diversas variações, como o clássico Old No. 7, o Gentleman Jack e o Single Barrel.",
      product: 'Jack daniels',
      preco: 200,
    },
    {
      img: require("../imgs/Gin Bombay Sapphire Dry London.jpg"),
      id: 3,
      decrission:
        ' Bombay Sapphire é um gim premium da Inglaterra, conhecido por seus botânicos únicos, incluindo zimbro e casca de limão. Sua garrafa azul icônica reflete sua suavidade. É apreciado por suas notas cítricas e herbais, sendo popular em coquetéis clássicos e modernos.',
      product: 'Gin Bombay',
      preco: 425,
    },
    {
      img: require("../imgs/corote 1.jpg"),
      id: 3,
      decrission:
        'Corote é uma bebida alcoólica doce brasileira, infundida com frutas e ervas. Popular em festas jovens, é vendido em embalagens plásticas e possui diversos sabores.',
      product: 'Corote',
      preco: 3,
    },
  ];
  const mykey = (item) => item.id.toString();
  const myrender = ({ item }) => {
    return (
      <View style={styles.drinksdiv}>
        <Text style={styles.producttxt}>{item.product}</Text>
        <Image style={styles.drinkimg} source={item.img} />

        <Text style={styles.descritiontxt}>{item.decrission}</Text>
        <Text style={styles.precotxt}>preço : {item.preco}.00 R$</Text>
        <TouchableOpacity
          onPress={() => {
            opencomprar();
          }}
          style={styles.btncomprar}
          id={item.id}>
          <Text style={styles.txtbtncomprar}>COMPRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btncarrinho}
          onPress={() => {
            newCounter(couterstuff + 1);
     
     const carrinholist=[...stuffs,item]
     newStuff(carrinholist) 
  
          }}>
          <Text>colocar no carrinho</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SAFRA SUPREMA</Text>
      <TouchableOpacity  onPress={opencarrinho}>
        <Text>carrinho:{couterstuff}</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={mykey}
        renderItem={myrender}></FlatList>
    </View>
  );
}
