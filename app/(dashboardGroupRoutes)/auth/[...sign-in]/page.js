// catch all routes afyter sign-in param
const SignInPage = ({ params }) => {
    console.log(params);
    return (
        <div>SignInPage: params: ${JSON.stringify(params)}</div>
    )
}

export default SignInPage;