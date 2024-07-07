import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-white text-3xl font-semibold text-center">
          Login <span className="text-blue-500">QuickChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label ">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              You forgot your password ?
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-blue-500 text-white hover:bg-black">
              Login
            </button>
          </div>
          <div className="flex flex-col">
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block "
            >
              You {"don't"} have an account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
