/**
 * Created by ggoma on 2016. 11. 27..
 */
export function cardSize(w) {
    const size = w;
    //calculate padding
    const width = size/7 - 4;
    const height = size/5 - 4;
    return {width, height}
}

export function createDeck() {
    let suite = ['c', 's', 'h', 'd'];
    let numbers = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
    let deck = [];


    for(i = 0; i < suite.length ; i++) {
        for(j = 0; j < numbers.length; j++) {
            const id = numbers[j] + suite[i];
            deck.push(id);
        }
    }

    return deck;
}

export function shuffle(d) {
    let deck = d;
    for (let i = d.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [d[i - 1], d[j]] = [d[j], d[i - 1]];
    }
    return deck;
}

export const imageMap = {
    '2c': require('../img/2c.png'),
    '2d': require('../img/2d.png'),
    '2h': require('../img/2h.png'),
    '2s': require('../img/2s.png'),
    '3c': require('../img/3c.png'),
    '3d': require('../img/3d.png'),
    '3h': require('../img/3h.png'),
    '3s': require('../img/3s.png'),
    '4c': require('../img/4c.png'),
    '4d': require('../img/4d.png'),
    '4h': require('../img/4h.png'),
    '4s': require('../img/4s.png'),
    '5c': require('../img/5c.png'),
    '5d': require('../img/5d.png'),
    '5h': require('../img/5h.png'),
    '5s': require('../img/5s.png'),
    '6c': require('../img/6c.png'),
    '6d': require('../img/6d.png'),
    '6h': require('../img/6h.png'),
    '6s': require('../img/6s.png'),
    '7c': require('../img/7c.png'),
    '7d': require('../img/7d.png'),
    '7h': require('../img/7h.png'),
    '7s': require('../img/7s.png'),
    '8c': require('../img/8c.png'),
    '8d': require('../img/8d.png'),
    '8h': require('../img/8h.png'),
    '8s': require('../img/8s.png'),
    '9c': require('../img/9c.png'),
    '9d': require('../img/9d.png'),
    '9h': require('../img/9h.png'),
    '9s': require('../img/9s.png'),
    '10c': require('../img/10c.png'),
    '10d': require('../img/10d.png'),
    '10h': require('../img/10h.png'),
    '10s': require('../img/10s.png'),
    'jc': require('../img/jc.png'),
    'jd': require('../img/jd.png'),
    'jh': require('../img/jh.png'),
    'js': require('../img/js.png'),
    'qc': require('../img/qc.png'),
    'qd': require('../img/qd.png'),
    'qh': require('../img/qh.png'),
    'qs': require('../img/qs.png'),
    'kc': require('../img/kc.png'),
    'kd': require('../img/kd.png'),
    'kh': require('../img/kh.png'),
    'ks': require('../img/ks.png'),
    'ac': require('../img/ac.png'),
    'ad': require('../img/ad.png'),
    'ah': require('../img/ah.png'),
    'as': require('../img/as.png')
}