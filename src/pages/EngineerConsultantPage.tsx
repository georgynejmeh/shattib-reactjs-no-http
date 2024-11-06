import {
  bluePenIcon,
  ButtonGold,
  MainPadding,
  redTrashIcon,
  TitleNumber,
} from "..";

interface Props {
  status?: "معلّق" | "معالج";
}

const EngineerConsultantPage = ({ status = "معلّق" }: Props) => {
  return (
    <main>
      <MainPadding>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">طلب استشارة رقم #123456</h1>

            {status === "معالج" ? (
              <div className="rounded-full bg-green-200 w-24 py-1 text-center">
                {status}
              </div>
            ) : status === "معلّق" ? (
              <div className="rounded-full bg-orange-200 w-24 py-1 text-center">
                {status}
              </div>
            ) : null}
          </div>

          <div className="w-52">
            <ButtonGold>استشارة جديدة</ButtonGold>
          </div>
        </div>

        <h3 className="text-gray-500 my-4">تاريخ الإرسال 15/8/2024</h3>

        <hr className="my-4" />

        <section className="bg-gray-100 w-full h-full p-12 rounded">
          <div className="flex justify-between w-full">
            <h2 className="text-2xl font-bold">معلومات الطلب</h2>

            <div className="flex gap-8">
              <button>
                <img src={bluePenIcon} alt="" />
              </button>
              <button>
                <img src={redTrashIcon} alt="" />
              </button>
            </div>
          </div>

          <hr />

          <div className="flex gap-12">
            <TitleNumber inverse column subTitle="استشارة توسيع مساحة">
              <b>موضوع الاستشارة</b>
            </TitleNumber>
            <TitleNumber inverse column subTitle="مهندس معماري">
              <b>اختصاص المهندس</b>
            </TitleNumber>
            <TitleNumber inverse column subTitle="مشروع سكني">
              <b>نوع المشروع</b>
            </TitleNumber>
            <div dir="ltr">
              <TitleNumber inverse column subTitle="+966123456789">
                <b dir="rtl">رقم الهاتف:</b>
              </TitleNumber>
            </div>
          </div>

          <div className="pb-24">
            <h3 className="text-xl font-bold text-gray-400 pb-2">
              تفاصيل الاستشارة
            </h3>
            <p className="text-lg">
              أرغب في استشارة هندسية حول كيفية زيادة مساحة المنزل بطريقة عملية
              وفعّالة. الهدف هو تحسين توزيع المساحات الداخلية وتوسيع المناطق
              المعيشية لتكون أكثر اتساعًا وراحة. أحتاج إلى نصائح حول الخيارات
              المتاحة لإعادة تصميم أو توسعة المنزل بما يتناسب مع احتياجات
              الأسرة، بالإضافة إلى الحفاظ على التوازن بين المساحة الداخلية
              والمظهر الخارجي للمنزل.
            </p>
          </div>
        </section>
      </MainPadding>
    </main>
  );
};

export default EngineerConsultantPage;
