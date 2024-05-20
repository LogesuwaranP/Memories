import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import notificationIcon from '../assets/icons/notifications.png';
import { ColorDefault, TextDefault, center, h3 } from '../assets/styles/global';
import FolderCard from '../components/FolderCard';
import ListCard from '../components/ListCard';

const Home = () => {
  return (
    <View style={styles.container}>

       <View style={[center, styles.headerWrap]}>
        
        <View style={styles.welcome}>
          <Image
            source={{ uri: 'https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png' }}
            style={styles.image}
            resizeMode="cover"
          />

          <View>
            <Text style={[h3, ColorDefault]}>Welcome</Text>
            <Text style={TextDefault}>The User</Text>
          </View>

        </View>

        <View>
          <Image source={notificationIcon} style={{ width: 24, height: 24 }} />
        </View>

       </View>
       
       <View style={styles.summaryConatiner} >
        <Text>Text summary</Text>
       </View>

       <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.header]}>Folder</Text>
       </View>

       <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {[1,2,3,4,5].map((item)=> <FolderCard key={item}/>)}
       </ScrollView>

       <View style={styles.headerContainer}>
        <Text style={[styles.text, styles.header]}>View</Text>
       </View>

       <ScrollView style={styles.verticalScroll} showsVerticalScrollIndicator={false}>
        {[1,2,3,4,5,6,7].map((item)=> <ListCard key={item}/>)}
       </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  //  padding: "0.75rem",
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    minHeight: 200,
  },
  verticalScroll: {
    flexGrow: 1,
  },
  headerWrap: {
    marginBottom: 10
  },
  summaryConatiner: {
    width: "100%",
    height: "8.5rem",
    //borderRadius: "0.50rem",
    backgroundColor: "#2f3855"
  },
  welcome: {
    flexDirection: "row",
  },
  welcomeHeader: {
    fontSize: 20,
  },
  image:{
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: 50,
    marginRight: 5
  },
  text: {
    fontSize: 20,
    color: "#F5F5FC",
  },
  headerContainer: {
    marginVertical: 10
  },
  header: {
    fontSize: 22,
    fontWeight: 600,
    color: "#F5F5FC",
  },
  roboto: {
    fontFamily: 'Roboto-Regular',
  },
  robotoBold: {
    fontFamily: 'Roboto-Bold',
  },
  poppins: {
    fontFamily: 'Poppins-Regular',
  },
  poppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default Home