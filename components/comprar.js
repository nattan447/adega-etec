import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  Button,TouchableOpacity,TextInput
} from 'react-native';
import {useState} from "react"


export default function Comprar(props){
  
  const[clos,setClose]=useState(true)
  const[arraycpf,newArraycpf]=useState([])
  const[arraycard,newArraycard]=useState([])
  const[errorcpf,setErrorcpf]=useState(undefined);
  const[errorcard,setErrorcard]=useState(undefined)

const[cpf,setCpf]=useState("")
const[cardnum,setCardnum]=useState("")
const handlecpf=(text)=>{
setCpf(text)
const arr=[...arraycpf,text]
newArraycpf(arr)
}
const handlecardnum=(num)=>{
  setCardnum(num)
  const arr=[...arraycard,num]
  newArraycard(arr)
}
const close=()=>{
props.func(false)
}
const compradone=()=>{
  console.log(arraycpf.length)
    arraycpf.length<11?setErrorcpf("esse campo é obrigatório"):setErrorcpf(undefined)
        arraycard.length<11?setErrorcard("esse campo é obrigatório"):setErrorcard(undefined)
  if(arraycpf.length==11 && arraycard.length==11){
      alert("obrigado por comprar nosso produto")
      props.func(false)
      }



}
  return(
    <View style={styles.container}>
    
    <View  style={{justifyContent:'flex-start',width:300}}>
    <TouchableOpacity onPress={close}>
    <Image  style={styles.imgs} source={require("../imgs/close.png")}/>
    </TouchableOpacity>
    </View>
     <Text style={styles.inputtxt}>digite seu cpf</Text>
  
    <View style={styles.inputdiv}> 
   
   <TextInput value={cpf} placeholder="000.000.000-00" maxLength={11} keyboardType="numeric" onChangeText={handlecpf}></TextInput>
   </View>
      <Text style={styles.errortxt}>{errorcpf}</Text>
   <Text style={styles.inputtxt}>número do cartão</Text>
   <View style={styles.inputdiv}>
     
   <TextInput value={cardnum}  onChangeText={handlecardnum}  keyboardType="numeric" maxLength={11}   placeholder="000.000.000-00"></TextInput>
   </View>
     <Text style={styles.errortxt}>{errorcard}</Text>
   <TouchableOpacity style={styles.btn}>
   <Text style={styles.btntxt} onPress={compradone}>tudo pronto!</Text>
   </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
container:{
  width:500,
  height:330,
  alignItems:"center",
  paddingTop:3,
  

},
inputtxt:{
  fontSize:16,
  fontWeight:"bold",
  textTransform:'uppercase',
  marginTop:14,
},inputdiv:{
marginTop:20,
borderRadius:6,
width:140,
backgroundColor:"white",
alignItems:"center",
},
btn:{
  marginTop:50,
  backgroundColor:"white",
  borderRadius:10,
  width:130,
  height:40,
alignItems:"center",
justifyContent:"center",
},
btntxt:{
  fontSize:14,
  fontWeight:"bold",
  textTransform:'uppercase',
},
imgs:{
  height:20,
  width:20,
},
errortxt:{
  color:"red"
}


})