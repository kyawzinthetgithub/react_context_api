import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data", data);
  };

  console.log(errors);

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold text-gray-600 mb-5">Login</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label className="text-lg font-semibold inline-block" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full border border-gray-300 focus:border-sky-300 rounded p-2 focus:outline-none text-gray-800"
                placeholder="Username"
                autoComplete="off"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-sm text-red-500">
                  Username field is required
                </span>
              )}
            </div>
            <div className="field">
              <label className="text-lg font-semibold inline-block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border border-gray-300 focus:border-sky-300 rounded p-2 focus:outline-none text-gray-800"
                placeholder="password"
                autoComplete="off"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  Password field is required
                </span>
              )}
            </div>
            <div className="grid mt-5">
              <button className="fluid ui button blue px-5 py-2 rounded text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
