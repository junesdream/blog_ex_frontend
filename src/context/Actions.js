export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload: user,
});

export const LoignFailure = () => ({
    type:"LOGIN_FAILURE",
});

export const Loigout = () => ({
	type: "LOGOUT",
});

