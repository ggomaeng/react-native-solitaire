/**
 * Created by ggoma on 2016. 11. 27..
 */
/**
 * Created by ggoma on 2016. 11. 27..
 */
import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
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
            cards: props.cards,
            width: cardSize(width).width,
            height: cardSize(width).height,
            three: []
        }

        this.nextThree = this.nextThree.bind(this);
        this.deleted = this.deleted.bind(this);
    }

    renderCards() {
        const {cards, from, to} = this.state;
        // console.log('cards-',cards);
        return cards.map((c, i) => {
            if(i < 2) {
                return (
                    <View key={i} style={{position: 'absolute', left: i * 10}}>
                        <Card releasedOn={this.props.releasedOn} deleted={this.deleted} draggable={false} source={c} />
                    </View>
                )
            } else if (i == 2) {
                return (
                    <View key={i} style={{position: 'absolute', left: i * 10}}>
                        <Card releasedOn={this.props.releasedOn} deleted={this.deleted} draggable={true} source={c} />
                    </View>
                )
            }
        })
    }

    nextThree() {
        let {cards} = this.state;
        cards.unshift(cards.pop());
        cards.unshift(cards.pop());
        cards.unshift(cards.pop());
        this.setState({cards});
    }

    deleted(id) {
        console.log(id , 'was deleted');
        let {cards} = this.state;
        let index = cards.indexOf(id);
        cards.splice(index, 1);
        // console.log('left in deck', cards);
        this.setState({cards});

    }

    render() {
        const {width, height} = this.state;
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableWithoutFeedback onPress={this.nextThree}>
                    <View style={{width, height, borderWidth: 1, margin: 2, borderRadius: 5}}>
                        <Card faceDown={true}/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{width, height, margin: 2, borderRadius: 5}}>
                    <View style={{flexDirection: 'row'}}>
                        {this.renderCards()}
                    </View>
                </View>
            </View>
        )
    }

}