import React,{useState} from "react";
import { View,Text, SafeAreaView,ImageBackground, StyleSheet,TextInput,Image, TouchableOpacity} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Icon from 'react-native-vector-icons/FontAwesome';


const Login =()=>{

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

return(
    <SafeAreaView style={{
        flex:1

    }}>
<ImageBackground
      source={require('../../assets/Background.png')} 
      style={styles.background}>
    <View style={{
        justifyContent:"center"
    }}>
    <Header 
        title={"Signin"}
        txtColor={"white"}
    />

<View style={{
    alignItems:"center",
    marginTop:30
}}>

<Image source={require('../../assets/Logo.png')}  style={{
    height:200,
    width:200
}}/>
</View>

<View style={{
    alignItems:"center"
}}>
    <Text style={{
        color:"white",
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold"
        } }>
    NutriMate
    </Text>
</View>




    <View style={{
      alignItems:"center",
      marginTop:40
    }}>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="white"
        //onChangeText={text => setUsername(text)}
        //value={username}
      />
    </View>

    
    <View style={{
        alignItems:"center",
        marginTop:10
      }}>
      <View style={styles.container}>
    <TextInput
        style={{
        textAlign:"center",
        paddingHorizontal:10,
        color:"white",
        }}
        placeholder="Password"
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor="white"
        //onChangeText={text => setPassword(text)}
        //value={password}
      />
     <TouchableOpacity
        style={styles.iconContainer}
        onPress={togglePasswordVisibility}
      >
        <Icon
          name={isPasswordVisible ? 'eye' : 'eye-slash'}
          size={20}
          color="white"
        />
      </TouchableOpacity>

    </View>
    </View>

    <View
    style={{
    alignItems:"center",
    marginTop:10}}>
      <TouchableOpacity>
        <Text
        style={{
        color:"white",
        fontSize:15,
        fontStyle:"italic",
        } }>
          Forgot Your Password?
        </Text>
      </TouchableOpacity>
    </View>

    <View style={{
    alignItems:"center",
    marginTop:20
}}>

    <Button
        text={"SIGN IN"}
        txtColor={"black"}
        btncolor={"white"}
    /> 
    </View>

    <View
    style={{
    alignItems:"center",
    marginTop:20}}>
      <TouchableOpacity>
        <Text
        style={{
        color:"white",
        fontSize:15,
        fontStyle:"italic",
        } }>
          Don't Have Account?
        </Text>
      </TouchableOpacity>
    </View>

    
    
      </View>
    </ImageBackground>

    </SafeAreaView>
);

};
const styles =StyleSheet.create({
  container: {
    width:'80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginTop:20,
    height: 50,
    paddingHorizontal: 30,
  },
background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    width:'80%',
    borderRadius: 5,
    paddingHorizontal: 40,
    color:"white"
  },
  iconContainer: {
    padding: 10,
    paddingHorizontal:100
  }
});
export default Login;