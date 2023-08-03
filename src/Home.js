import './App.css'
function Home({logout,user}){
    console.log(user);
return(<><div className="profile">{user?.attributes?.email}
<button onClick={logout}>logout</button></div>


</>)
}
export default Home;