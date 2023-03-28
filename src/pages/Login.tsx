const Login = () => {
  return (
    <section className="w-full min-h-screen bg-red-50">
      <h1>화면 연습용</h1>
      <div className="w-full h-28 flex flex-col gap-2 bg-blue-100">
        <form action="/login" method="post">
          <input className="border border-blue-400" type="text" name="username" />
          <input className="border border-gray-400" type="password" name="password" />
        </form>
      </div>
      <div>
        <div className="w-full h-28 flex flex-col gap-2 bg-green-200">
          <form action="/login" method="post">
            <input className="border border-blue-400" type="text" name="username" />
            <input className="border border-gray-400" type="password" name="password" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login