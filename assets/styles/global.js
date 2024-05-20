const { StyleSheet } = require("react-native");

export const globalCSS = StyleSheet.create({
    
    text: {
      fontSize: 20,
      color: "#F5F5FC",
    },
    headerContainer: {
      marginVertical: 15
  
    },
    header: {
      fontSize: 24,
      fontWeight: 600,
    }
   
  });
  

export const h3 = {
    fontSize: 16,
    fontWeight: 600,
}

export const p = {
    fontSize: 14
}

export const TextDefault = {
    fontSize: 14,
    color: "#F5F5FC",
}

export const ColorDefault = {
    color: "#F5F5FC",
}

export const center = {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}