import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';


export default function CorlorScreen({navigation}) {
  var [image, setImage] = useState(require('/src/images/vs_blue.png'));
  var [stringColor, setStringColor] = useState('Blue');
    return (
        <View style = {styles.container}>
            <View style = {styles.head}>
                <Image
                    source = {image}
                    style = {styles.imgBlue}
                />
              <View style = {{flexDirection:'column'}}>
                    <Text style = {styles.txtTenSanPham}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>

                    <Text style = {[styles.txtTenSanPham, {marginTop:'5px'}]}>Màu: <Text style = {{fontWeight:'bold'}}>{stringColor}</Text> </Text>
                   
                    <Text style = {[styles.txtTenSanPham, {marginTop:'5px'}]}>Cung cấp bởi <Text style = {{fontWeight:'bold'}}>Tiki Tradding</Text></Text>
                    
                    <Text style = {[styles.txtTenSanPham, {marginTop:'5px', fontWeight:'bold', fontSize:'16px'}]}>1.790.000 đ</Text>

              </View>

            </View>

            <View style = {styles.end}>
                <Text style = {styles.txtChonMau}>Chọn một màu bên dưới:</Text>


                <Pressable style={styles.btnBluePastel}
                            onPress={() => {
                              setImage(require('/src/images/vs_silver.png'));
                              setStringColor("Silver")
                            }}/>

                <Pressable
                  onPress={() => {
                    setImage(require('/src/images/vs_red.png'))
                    setStringColor("Red")
                  }}
                  style={styles.btnRed}/>

                <Pressable
                  onPress={() => {
                    setImage(require('/src/images/vs_black.png'))
                    setStringColor("Black")
                  }}
                style={styles.btnBlack}/>

                <Pressable
                  onPress={() => {
                    setImage(require('/src/images/vs_blue.png'))
                    setStringColor("Blue")
                  }}
                  style={styles.btnBlue}/>


                <TouchableOpacity 
                  onPress={() => {
                    navigation.navigate('HomeScreen', { colorImg: image })

                  }}  
                  style={styles.btnXong}>
                    
                    <Text style = {styles.txtXong}>XONG</Text>

                </TouchableOpacity>


            </View>

        </View>

    )};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    head:{
        width: '100%',
        height: '135px',
        flexDirection:'row',
    },

    end:{
        width: '100%',
        height: '528px',
        backgroundColor:'#C4C4C4',
        alignItems:'center'

    },

    txtTenSanPham:{
        left:'20px',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '17.58px',
        top:'15px'
      },

      txtChonMau:{
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '21.09px',
        padding:'15px',
        alignSelf:'flex-start'
      },

      txtXong:{
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        color:'white',
        alignSelf:'center',
        paddingTop:'10px'
      },

      btnBluePastel:{
        width: '85px',
        height: '80px',
        backgroundColor:'#C5F1FB',
        margin:'10px',
        boxShadow: '0px 4px 4px 0px #00000040'

      },

      btnRed:{
        width: '85px',
        height: '80px',
        backgroundColor:'#F30D0D',
        margin:'10px'
      },

      btnBlack:{
        width: '85px',
        height: '80px',
        backgroundColor:'#000000',
        margin:'10px'
      },

      btnBlue:{
        width: '85px',
        height: '80px',
        backgroundColor:'#234896',
        margin:'10px'
      },

      btnXong:{
        width: '326px',
        height: '44px',
        borderRadius: '10px',
        backgroundImage:'linear-gradient(0deg, rgba(25, 82, 226, 0.58), rgba(25, 82, 226, 0.58))',
        top:'20px'

      },

    imgBlue:{
        width: '112px',
        height: '132px',
        left:'4px'
      },


});
