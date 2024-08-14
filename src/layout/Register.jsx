import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex h-screen justify-center items-center bg-blue-50">
      <div className="max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg shadow-black/50">
        <div className="flex flex-col space-y-1">
          <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
          <p className="text-sm text-zinc-500">
            Please fill in the form to create an account.
          </p>
        </div>
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="first_name"
                  placeholder="Enter first name"
                  name="first_name"
                  type="text"
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                  id="last_name"
                  placeholder="Enter last name"
                  name="last_name"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="email"
                placeholder="Enter your email"
                name="email"
                type="email"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700"
                htmlFor="password_"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="password_"
                placeholder="password"
                name="password"
                type="password"
              />
            </div>
            <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
              Submit
            </button>
            <p className="text-center text-sm text-zinc-700">
              Already have an account?
              <Link to="/login" href="#" className="font-semibold underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
