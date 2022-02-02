import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {RootStateType} from "../Redux/store";

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): MapStatePropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsForRedirectType) => {
        let {isAuth, ...restProps} = props

        if (!props.isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T}/>

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}


