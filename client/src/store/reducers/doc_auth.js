import * as actionTypes from "../actionTypes";

const initialState={
    token:null,
    userId:null,
    error:null,
    profile:null,
    username:null,
    role:null,
    authRedirect:'/'
}

const docAuthSuccess=(state,action)=>{
    return{
        ...state,
        token:action.token,
        userId:action.userId,
        username:action.username,
        role:action.role,
        error:null
    }
};

const docAuthFail=(state,action)=>{
    return{
        ...state,
        error:action.error

    };
}

const docAuthLogout=(state,action)=>{
    return{
        ...state,
        error:null,
        token:null,
        profile:null,
        username:null,
        role:null,
        userId:null
    }
}

const docAuthRedirect=(state,action)=>{
    return{
        ...state,
        authRedirect:action.path

    }
}

const docSetProfile=(state,action)=>{
    return{
        ...state,
        profile:action.profile,
        username:action.profile.firstName

    }
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.DOC_AUTH_SUCCESS: return docAuthSuccess(state,action);
        case actionTypes.DOC_AUTH_FAIL: return docAuthFail(state,action);
        case actionTypes.DOC_AUTH_LOGOUT: return docAuthLogout(state,action);
        case actionTypes.DOC_AUTH_REDIRECT: return docAuthRedirect(state,action);
        case actionTypes.DOC_SET_PROFILE: return docSetProfile(state,action);
        default: return state;
    }
};


export default reducer;