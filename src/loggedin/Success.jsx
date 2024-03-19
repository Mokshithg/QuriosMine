
export default function Success (){
    const user = location.state?.user
    return (
        <div>
            <h1>You are successfully signed in!!</h1>
            {
                user && (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        {user.photoURL && <img src={user.photoURL} alt="Profile Picture" />}
                    </div>
                )
            }
        </div>
    )
}