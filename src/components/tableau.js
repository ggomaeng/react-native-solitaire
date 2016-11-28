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
    StyleSheet
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {cardSize, image} from './helpers';
import Card from './card';

export default class EmptyDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            number: props.number,
            cards: props.cards,
            width: cardSize(width).width,
            height: cardSize(width).height,
            highestStack: props.cards.length - 2
        }

        this.deleted = this.deleted.bind(this);
    }

    componentDidMount() {
        //weird hack
        setTimeout(() => {
            this.refs.deck.measure( (fx, fy, width, height, px, py) => {
                this.setState({fx, fy, width, height, px, py});
            }), 0
        })
    }

    belongsInDeck(x, y, card) {
        const {px, py, width, height, id, number} = this.state;
        /*
         valid zone:
         width: (px) ~ (px + width)
         height: (py) ~ (py + height)
         */
        if( (x > px &&  x < (px + width)) && (y > py && y < (py + height + 10 * number))){
            console.log('landed on', id);
            this.check(card);
            return true;
        }
        return false
    }

    check(card) {
        //check condition then
        console.log('highest stack:', this.state.highestStack);
        this.setState({cards: this.state.cards.concat(card)});
    }


    deleted(id) {
        console.log(id , 'was deleted');
        let {cards} = this.state;
        cards.pop();
        console.log('left in deck', cards);
        this.setState({cards, highestStack: cards.length - 2});

    }


    renderCards() {
        const {cards, highestStack} = this.state;
        // console.log('re rendering');
        return cards.map((c, i) => {
            // console.log('putting soure', c);
            if(i+1 == cards.length ) {
                return (
                    <View key={i} style={{position: 'absolute', top: 10 * i}}>
                        <Card ref={i} key={i} faceDown={false} releasedOn={this.props.releasedOn} deleted={this.deleted}
                              draggable={true} source={c} />
                    </View>
                )
            } else if (i > highestStack){
                return (
                    <View key={i} style={{position: 'absolute', top: 10 * i}}>
                        <Card key={i} faceDown={false} releasedOn={this.props.releasedOn} deleted={this.deleted}
                              draggable={false} source={c} />
                    </View>
                )
            } else {
                return (
                    <View key={i} style={{position: 'absolute', top: 10 * i}}>
                        <Card faceDown={true} releasedOn={this.props.releasedOn} />
                    </View>
                )
            }

        })
    }

    render() {
        const {width, height} = this.state;
        return (
            <View ref='deck' style={{width, height, margin: 2, }}>
                {this.renderCards()}
            </View>
        )
    }

}