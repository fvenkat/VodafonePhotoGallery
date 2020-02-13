import React from 'react'
import Footer from '../Components/Common/Footer'
import { connect } from 'react-redux'
import { usersList } from '../Redux/Actions/usersList'
import { photosList } from '../Redux/Actions/photosList'

import classes from '../Styles/Common.module.css'
import ListAlbum from './Albums/ListAlbum'


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: false
        }
    }

    componentDidMount() {
        this.props.usersList();
        this.props.photosList();
    }

    render() {
        return (
            <div className={classes.mainAppWrapper}>
                <div className={classes.listWrapper}>
                    <ListAlbum />
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null, {usersList, photosList})(Home)