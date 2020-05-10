import React,{Component} from 'react'
import kittens from '../assets/kittens.json'
import Paper from '@material-ui/core/Paper'


export default class ViewKittens extends Component {

    render() {
        const getKitten = Math.round(Math.random() * (kittens.length - 1) + 0);
        const kitten = kittens[getKitten].url
        console.log(getKitten)
        return (
            <Paper>
                <img src={kitten} height={100} width={100}/>
            </Paper>
        )

    }
}