const Lec34_Comp = () => {
    let isLogin= false
    return (
        <div>
            <h1>Lec34: QueryBy and QueryAllBy</h1>
            {!isLogin ? (<button>Login</button>): (<button>Logout</button>)}
         </div>
    )
}

export default Lec34_Comp
