import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

let mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
    }
}

export const AuthRedirectComponent = (Component) => {
    const AuthRedirect = (props) => {        
        if (!props.isAuth) {
            return (<Redirect to={'/login'} />)
        }
        return <Component {...props} />
    }
    return connect(mapStateToProps)(AuthRedirect);
};



