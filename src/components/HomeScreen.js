import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function HomeScreen({navigation, route}) {
  const colorImg = route.params;

  return (
    <View style = {styles.container}>
        <Image
            source = {colorImg == undefined ? require('/src/images/vs_blue.png') : colorImg.colorImg}
            style = {styles.imgBlue}
        />

        <View style = {{left: '30px'}}>
            <Text style = {styles.txtTenSanPham}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

            <View style = {{flexDirection:'row', width:'100%', height:'30px', top:'10px', alignItems:'center'}}>
                <AirbnbRating
                  count={5}
                  defaultRating={5}
                  size={25}
                  starContainerStyle = {{alignSelf:'flex-start', left:'-5px'}}
                  showRating = {false}
                />

                <Text style = {[styles.txtTenSanPham, {left:'20px'}]}>(Xem 828 đánh giá)</Text>

            </View>

            <View style = {{flexDirection:'row', width:'100%', height:'30px', top:'15px', alignItems:'center'}}>
                
                <Text style = {styles.txtGiaMoi}>1.790.000 đ</Text>

                <Text style = {styles.txtGiaCu}>1.790.000 đ</Text>

            </View>

            <View style = {{flexDirection:'row', width:'100%', height:'30px', top:'20px', alignItems:'center'}}>
                
                <Text style = {styles.txtHoanTien}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

                <Image
                  source = {require('/src/images/hoi.png')}
                  style = {styles.imgHoanTien}
                />

            </View>

            <Pressable style={styles.btnChonMau}
                        onPress={() => {
                            navigation.navigate('ColorScreen')
                        }}>
                  <Text style = {styles.txtChonMau}>4 MÀU-CHỌN MÀU</Text>
                  <Image
                    source = {require('/src/images/Vector.png')}
                    style = {styles.imgChonMau}
                  />
            </Pressable>


            <TouchableOpacity style={styles.btnChonMua}>
                  <Text style = {styles.txtChonMua}>CHỌN MUA</Text>
            </TouchableOpacity>
            
            
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },

  txtTenSanPham:{
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '17.58px',
    textAlign: 'left',
  },

  txtGiaMoi:{
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '21.09px',
    textAlign: 'left',
  },

  txtGiaCu:{
    fontSize: '15px',
    fontWeight: '700',
    lineHeight: '17.58px',
    textAlign: 'center',
    color:'#00000094',
    left:'80px',
    textDecorationLine: 'line-through'
  },

  txtHoanTien:{
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '14.06px',
    color:'#FA0000'
  },


  txtChonMau:{
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '17.58px',
    textAlign:'center',
    paddingTop:'7px'
  },

  txtChonMua:{
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '23.44px',
    textAlign:'center',
    paddingTop:'7px',
    color:'#F9F2F2'
  },

  btnChonMau:{
    width: '332px',
    height: '34px',
    borderRadius: '10px',
    border: '1px solid #00000075',
    top:'40px',
  },

  btnChonMua:{
    width: '326px',
    height: '44px',
    borderRadius: '10px',
    top:'110px',
    border: '1px solid #CA1536',
    backgroundImage:'linear-gradient(0deg, #CA1536, #CA1536),linear-gradient(0deg, #EE0A0A, #EE0A0A)'

  },

  imgBlue:{
    width: '301px',
    height: '361px',
    top: '-2px',
    left:'29px'
  },

  imgHoanTien:{
    width: '20px',
    height: '20px',
    left:'20px'
  },

  imgChonMau:{
    width: '11.5px',
    height: '14px',
    left:'300px',
    top:'-15px'
  }

});