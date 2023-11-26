import Link from "next/link";

export default function login() {
    return(
        <div>
            <p className="text-6xl ml-20 pt-32 pb-10">Sign up</p>
            <div>
                <form className="ml-20">
                    <label className="text-2xl flex">Username:</label>
                    <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg mb-5" placeholder="Username" type="text" id="username" title="username" min="5" max="28"  required/>
                    <br/>
                    <label className="text-2xl flex">Password- Needs to contain up to 28 characters and a special character</label>
                    <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg mb-5" placeholder="Password" type="text" id="username" title="username" min="5" max="28" required/>
                    <br/>
                    <label className="text-2xl flex">Phone number:</label>
                    <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg mb-5" placeholder="44 1234 123456" type="tele" id="username" title="username" min="11" max="13" required/>
                    <br/>
                    <label className="text-2xl flex">Birthday:</label>
                    <input className="py-1 px-2 ml-5 bg-grey-100 border-2 border-green-800 focus:border-green-600 rounded-lg mb-5" type="date" id="username" title="username" />
                    <br/>
                    <input className="rounded-full bg-green-700 hover:bg-green-500 py-2 px-4 mt-5 text-xl" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}