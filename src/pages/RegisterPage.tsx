import {
  TextInput,
  personIcon,
  emailIcon,
  phoneIcon,
  lockIcon,
  Button,
  registerBanner,
  Link,
} from "..";

const RegisterPage = () => {
  return (
    <>
      <div className="flex max-lg:flex-col justify-center items-center min-h-screen max-lg:p-8">
        <div className="w-1/4 flex flex-col justify-center max-lg:w-full">
          <span className="text-yellow-600 text-2xl pb-4">
            أهلاً بك في شطّب!
          </span>
          <span className="text-2xl">إنشاء حساب</span>
          <form className="py-4" action="">
            <TextInput title="الاسم" icon={personIcon} />
            <TextInput title="البريد الالكتروني" icon={emailIcon} />
            <TextInput title="رقم الهاتف" icon={phoneIcon} />
            <TextInput password={true} title="كلمة المرور" icon={lockIcon} />
            <TextInput
              password={true}
              title="تأكيد كلمة المرور"
              icon={lockIcon}
            />
          </form>
          <div className="flex flex-col items-center">
            <div className="w-full">
              <Link to={"/admin/product/new"}>
                <Button>إنشاء حساب</Button>
              </Link>
            </div>
            <span className="pt-4">
              لديك حساب؟{" "}
              <Link to={"/login"}>
                <button>
                  <span className="text-yellow-600 underline">
                    تسجيل الدخول
                  </span>
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

export default RegisterPage;
