function User(props){
    let {userobj}=props;
    return (
<div className="text-center  shadow-2xl rounded-2xl mx-auto my-5 w-full max-w-xs">  
<img src={userobj.image} alt={userobj.name}
 className="w-24 h-24 rounded-full p-3 "  />
        <h2>{userobj.name}</h2>
        <p className="w-full">{userobj.email}</p>
    </div>
    )
}
export default User;