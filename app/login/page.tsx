export default function Login() {
    return(
        <main>
            <p className="px-24 pt-24 pb-12 text-5xl">Login Page</p>
            <form className="ml-24">
                <label className="my-4 text-2xl " htmlFor="username">Username:</label>
                <input className=" focus:outline-none rounded-xl appearance-none border-green-600 bg-gray-300 focus:bg-gray-100 focus:border-green-700 py-2 px-4 mb-4 ml-4 border-2" type="text" id="username" name="username" min="1"/><br/>
                <label className="my-4 text-2xl " htmlFor="password">Password:</label>
                <input className=" focus:outline-none rounded-xl appearance-none border-green-600 bg-gray-300 focus:bg-gray-100 focus:border-green-700 py-2 px-4 mb-4 ml-4 border-2" type="text" id="password" name="password" min="1"/><br/>
                <input className="bg-green-600 hover:bg-green-700 rounded-xl px-4 py-2" type="submit" value="Submit"></input>
            </form>
            <div className="pt-10">
                <span className="pl-24 mt-10 ">Dont have an account? <a href="signup" className="text-green-700">Click here</a></span>
            </div>
        </main>
    )
}