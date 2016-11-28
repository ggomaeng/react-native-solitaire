/**
 * Created by ggoma on 2016. 11. 27..
 */
import React, {Component} from 'react';
import {
View,
Dimensions,
Text,
StyleSheet
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {cardSize} from './helpers';
import Card from './card';

export default class EmptyDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            cards: [],
            width: cardSize(width).width,
            height: cardSize(width).height,
        }
    }

    componentDidMount() {
        //weird hack
        setTimeout(() => {
            this.refs.deck.measure( (fx, fy, width, height, px, py) => {
                this.setState({fx, fy, width, height, px, py});
            }), 0
        })
    }

    check(card) {
        //check condition then
        this.setState({cards: this.state.cards.concat(card)});
    }


    belongsInDeck(x, y, card) {
        const {px, py, width, height, id} = this.state;
        /*
             valid zone:
             width: (px) ~ (px + width)
             height: (py) ~ (py + height)
        */
        if( (x > px &&  x < (px + width)) && (y > py && y < (py + height))){
            console.log(card, 'landed on', id);
            this.check(card);
            return true;
        }
        return false;
    }

    renderCards() {
        let {cards} = this.state;
        return cards.map((c, i) =>  {
            return (
                <View key={i} style={{position: 'absolute'}}>
                    <Card ref={i} key={i} faceDown={false} draggable={false} source={c} />
                </View>
            )
        })
    }

    render() {
        const {width, height} = this.state;
        return (
            <View ref='deck' style={{width, height, borderWidth: 1, margin: 2, borderRadius: 5,}}>
                {this.renderCards()}
            </View>
        )
    }

}