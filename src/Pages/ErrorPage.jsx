import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const ErrorPage=()=>{
    return(
        <>
        <Navbar/>
        <div className="grid place-items-center py-12">
            <img className="h-[50vh]" src="./error-404.png" />
            <h3 className="font-bold text-3xl my-3">Oops, page not found!</h3>
            <p className="text-gray-500 mb-4">The page you are looking for is not available.</p>
            <button className="btn btn-primary bg-linear-to-b from-purple-700 to-blue-500 text-white border-none px-7">Go back</button>
        </div>
<Footer/>
</>
    )
}
export default ErrorPage