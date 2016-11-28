/**
 * Created by ggoma on 2016. 11. 27..
 */
import React, {Component} from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';

import Foundation from './foundation';
import Card from './card';
import Tableau from './tableau';
import Stock from './stock';

import {createDeck, shuffle} from './helpers';

export default class Board extends Component {
    constructor() {
        super();

        let deck = shuffle(createDeck());
        //7 tableau
        let tableau = [];
        for(i = 0; i < 7; i++) {
            let temp = [];
            for(j = 0; j <= i; j++) {
                temp.push(deck.pop());
            }
            tableau.push({id: 't'+i, number: i, cards: temp});
        }


        this.state = {
            foundations: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
            tableau: tableau,
            stock: deck,
        };
        this.releasedOn = this.releasedOn.bind(this);
    }


    releasedOn(x, y, card) {
        const {foundations, tableau} = this.state;
        let valid = false;
        foundations.map((deck) => {
            if(this.refs[deck.id].belongsInDeck(x, y, card)) {
                valid = true;
            }
        })

        tableau.map((t) => {
            if(this.refs[t.id].belongsInDeck(x, y, card)) {
                valid = true;
            }
        })

        return valid;

    }

    renderFoundations() {
        const {foundations} = this.state;
        return foundations.map((deck) => {
            return <Foundation id={deck.id} key={deck.id} ref={deck.id}/>
        })
    }

    renderTableau() {
        const {tableau} = this.state;
        return tableau.map((t, i) => {
            return <Tableau ref={t.id} id={t.id} number={t.number} releasedOn={this.releasedOn} key={i} cards={t.cards}/>
        })
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 20, backgroundColor: '#277714'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Stock cards={this.state.stock} releasedOn={this.releasedOn}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        {this.renderFoundations()}
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {this.renderTableau()}
                </View>



            </View>
        )
    }
}