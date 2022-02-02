import React from "react";
import s from './ProfileStatus.module.scss'

type ProfileStatusPropsType ={
    status: string
}
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        edgeMode: false
    }
    activeEditMode = () =>{
        this.setState({
            edgeMode: true
        })
    }
    deActiveEditMode = () =>{
        this.setState({
            edgeMode: false
        })
    }
    render() {
        return (

            <div className={s.profileStatusBlock}>
                {!this.state.edgeMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.edgeMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActiveEditMode} type="text" value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}