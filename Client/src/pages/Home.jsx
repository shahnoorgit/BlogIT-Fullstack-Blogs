const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello👋</h1>
          <p className="py-6">
            Hey there Welcome to the Home page of BlogIT. Myself shahnoor the
            developer of this site , To acesss all the amazing content , Please
            Register your account by clicking on the button below below
          </p>
          <div className="flex items-center justify-center gap-5">
            <a href="/sign-up">
              <button className="btn btn-primary w-50">New Here?</button>
            </a>
            <a href="/login">
              <button className="btn btn-primary w-50">
                Already have account
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
