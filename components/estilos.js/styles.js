import { Text, SafeAreaView, StyleSheet,View } from 'react-native';


export default StyleSheet.create({
container: {
    flex: 1,
alignItems:"center",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header:{
    fontSize:30,
    marginTop:15,
    fontWeight:"bold",
    color:"red"
  },
  drinksdiv:{
    borderRadius:14,
    width:330,
  alignItems:"center",
    marginTop:30,
    height:650,
     paddingTop:20,   
     backgroundColor:"white",
     borderBottomWidth:10,
     borderBottomColor:"#dcdcdc",
  },
  drinkimg:{
    height:200,width:200,
  marginTop:20,
  borderRadius:20
  },
  producttxt:{
    fontSize:20,
    color:"black",
    textTransform:'uppercase',
    fontWeight:"bold",

  },descritiontxt:{
    fontSize:15,
    width:315,
    marginTop:40,
    marginBottom:30,
    alignItems:"center"
      },
      precotxt:{
        fontSize:21,
        textTransform:'uppercase',
        color:"red",
     
      },
      btncomprar:{
        backgroundColor:"white",
        borderRadius:6,
        marginTop:15,
        borderBottomWidth:2,
        borderBottomColor:"red",
       
},txtbtncomprar:{
  fontSize:20,
  color:"red", fontWeight:"bold",
},btncarrinhotxt:{
  fontSize:15,fontWeight:"bold",
},
btncarrinho:{
    backgroundColor:"white",
        borderRadius:6,
          borderBottomWidth:2,
        borderBottomColor:"red",marginTop:20,

}

})