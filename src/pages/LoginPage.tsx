import {
  TextInput,
  emailIcon,
  lockIcon,
  Button,
  registerBanner,
  Link,
} from "..";

const LoginPage = () => {
  return (
    <>
      <div className="flex max-lg:flex-col justify-center items-center min-h-screen max-lg:p-8">
        <div className="w-1/4 flex flex-col justify-center max-lg:w-full">
          <span className="text-yellow-600 text-2xl pb-4">
            أهلاً بك في شطّب!
          </span>
          <span className="text-2xl">أنشاء حساب</span>
          <form className="py-4" action="">
            <TextInput title="البريد الالكتروني" icon={emailIcon} />
            <TextInput password={true} title="كلمة المرور" icon={lockIcon} />
          </form>
          <div className="flex flex-col items-center">
            <Link className="w-full" to={"/home"}>
              <Button>تسجيل دخول</Button>
            </Link>
            <span className="pt-4">
              ليس لديك حساب؟{" "}
              <Link to={"/register"}>
                <button>
                  <span className="text-yellow-600 underline">أنشئ حساب</span>
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="px-8 max-lg:py-4"></div>
        <div>
          <img src={registerBanner} alt="" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
