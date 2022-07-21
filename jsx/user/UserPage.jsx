import React, { Component } from 'react'
import UserEditor from './components/UserEditor.jsx'
import UserVideos from './components/UserVideos.jsx'
import LoadingView from '../components/LoadingView.jsx'
import ErrorView from '../components/ErrorView.jsx'
import UserService from '../utils/UserService'


class UserPage extends Component {
    constructor(props) {
        super(props)
        this.userService = new UserService();
        const user = this.userService.getCurrentUser();

        this.state = {
            user: user
        }
    }

    fetchData = async () => {
        const userService = this.userService
        try {
            await userService.logIn("user1", "")
            const user = userService.getCurrentUser()
            this.inputHandler("user", user)
        } catch (error) {
            this.inputHandler("error", error)
        }
    }

    inputHandler = (name, value) => {
        this.setState({ [name]: value })
    }

    render = () => {
        return (
            <div>
                {
                    this.state.error ?
                        <ErrorView error={this.state.error} /> :
                        (this.state.user.id ?
                            (<div>
                                進度條線上課程 React教學
                                <UserEditor
                                    user={this.state.user}
                                    handler={this.inputHandler}
                                />
                                <UserVideos
                                    likes={this.state.user.videos.likes}
                                />
                            </div>) : <LoadingView />)
                }
                <button onClick={this.fetchData}>Click to Fetch</button>
            </div>
        )
    }
}

export default UserPage