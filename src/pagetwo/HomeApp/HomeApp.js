import { StyleSheet, View, ScrollView, Image, Text, KeyboardAvoidingView} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import Size from "../Size/Size";


export default function HomeApp(){
    
    return(
        <>  
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={{}}>
                    <View style={styles.cardSneakers}>
                        <Image
                            style={styles.card_Actions}
                            source={require('../../../assets/butadidas.jpg')}
                        />
                    </View>
                    <View>
                        <Text style={{color: "#000000", textAlign: 'center', fontSize: 26, marginTop: 10}}>Air Max</Text>
                    </View>
                    <View style={{flexDirection: 'row', margin: "auto",}}>
                        <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                        <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                        <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                        <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                        <FontAwesome name="star-half-empty" size={16} color="#daa520" style={{padding: 10}} />
                    </View>

                    <Size/>
                    
                    <View style={styles.price}>
                        <Text style={{fontSize: 20, color: 'black', marginTop: 10, marginLeft: 10}}>R$: 390,00</Text>
                    </View>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={{color: "white", fontSize: 25,textAlign: 'center'}}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 180,
        flex: 1,
    },
    // cardSneakers: {
    //     backgroundColor: "#D9D9D9",
    //     margin: "auto",

    
    //     width: 180,
    //     height: 180,
    // },
    card_Actions: {
        width: "90%",
        height: 160,
        marginTop: 10,
        margin: "auto",
        backgroundColor: "transparent",
    },
    size: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: "auto",
        flexWrap: "wrap"
    },
    nSize: {
        padding: 5,
        fontSize: 16,
        backgroundColor: '#e3e3e3',
        width: 50,
        marginTop: 5,
        textAlign: "center",
        borderColor: 'black',
        marginLeft: 10
    },
    buyButton: {
        backgroundColor: '#CB2C2C',
        width: 120,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        marginTop: 100,
    }
})