/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, FlatList, Image, Alert} from 'react-native';
import {connect} from 'react-redux'
import {fetchData} from './actions'

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        this.props.fetchData()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Redux Examples</Text>
                <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
                    <Text style={styles.buttonText}>Load Data</Text>
                </TouchableHighlight>
                <View style={styles.mainContent}>
                    {
                        this.props.appData.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.appData.data.length ? (
                            this.props.appData.data.map((person, i) => {
                                return <View key={i}>
                                    <Text>Name: {person.name}</Text>
                                    <Text>Age: {person.age}</Text>
                                </View>
                            })
                        ) : null
                    }
                </View>
                <FlatList data={this.props.appData.data}
                          keyExtractor={(item) => item.age.toString()}
                          renderItem={({item, index}) =>
                              <View style={styles.list}>
                                  <View key={index}>
                                      <Text>Name: {item.name}</Text>
                                      <Text>Age: {item.age}</Text>
                                  </View>
                                  <Text style={{
                                      fontWeight: 'bold',
                                      fontSize: 12,
                                      backgroundColor: 'rgb(85, 62, 214)',
                                      color: '#fff',
                                      padding: 5,
                                      alignItems: 'center',
                                      borderRadius: 5
                                  }}>{item.age}</Text>

                              </View>
                          }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent: {
        margin: 10,
    },
    list:{
        alignSelf:'stretch',
        borderBottomColor:'gray',
        borderBottomWidth:.3,
        paddingLeft:5,
        paddingRight:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    descriptions:{
        flex:2
    },
    img:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:5,
        paddingRight:5,
        marginRight:5
    },
    description:{
        fontSize:18,
        marginRight:5
    },
    subdescription:{
        fontSize:12
    },
    fadebtn:{
        width:66,
        height:66,
        borderRadius:50,
        backgroundColor:'rgba(85, 62, 214,0.8)',
        position:'absolute',
        bottom:15,
        right:15,
        alignItems:'center',
        justifyContent:'center',
        shadowOpacity:0.75,
        shadowRadius:5,
        shadowColor:'black'
    },
});

function mapStateToProps(state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)