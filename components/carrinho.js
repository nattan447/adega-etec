import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useState,useEffect} from "react"

export default function Carrinho(props){
const data=props.List
const[images,setImages]=useState(props.List)
function handleremove(imgageurl){
const nweimg=images.filter((img)=>img.id!=imgageurl)

setImages(nweimg)
props.removing(images)
props.isremoved(true)
}

const[removeimg,setRemove]=useState("")
const render=({item})=>{
return (
  <View>
  <Text style={styles.producttxt}>{item.product}</Text>
<Image  style={styles.productsimg} source={item.img}/>

<Button title="remove" onPress={()=>{
  handleremove(item.id)
}
}></Button>
</View>
)
}
const closewindow=()=>{
  props.windowcar(false);
}
const teste=()=>{
  alert(images[0].product)
}

  return (
<View style={styles.container}>
<View style={{justifyContent:'flex-end',width:340}}>
<TouchableOpacity onPress={closewindow}>
<Image style={styles.closeimage} source={require("../imgs/close.png")}/>
</TouchableOpacity>
</View>
<FlatList data={images}
keyExtractor={(item)=>item.id}
renderItem={render}
></FlatList>
<Button title="ver valor" onPress={teste}></Button>


</View>
  )
}


const styles=StyleSheet.create({
  container:{
    justifyContent:"center",
    height:300,
    alignItems:'center',
  },
  closeimage:{
  height:30,
  width:30,
  marginTop:10,
  },
  productsimg:{
 height:200,width:200,
  marginTop:20,
  borderRadius:20
  },producttxt:{
    textAlign:"center",
    color:"red",
    fontSize:20,
    fontWeight:"bold"
  }

})