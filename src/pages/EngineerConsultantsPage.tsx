import { ButtonGold, EngineerConsultantTableRow, MainPadding } from "..";
import "../App.css";

const EngineerConsultantsPage = () => {
  // TODO DELETE
  const temp: Array<"معالج" | "معلّق"> = [
    "معلّق",
    "معالج",
    "معلّق",
    "معالج",
    "معلّق",
    "معالج",
  ];

  return (
    <main>
      <MainPadding>
        <h1 className="text-4xl font-bold">طلب استشارة</h1>

        <div className="flex justify-between items-end my-8">
          <h3 className="text-gray-500">
            طلبات استشارة المهندس المقدمة من قبلك
          </h3>
          <div className="w-52 shadow">
            <ButtonGold>استشارة جديدة</ButtonGold>
          </div>
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>تاريخ الإرسال</th>
              <th>موضوع الاستشارة</th>
              <th>حالة الطلب</th>
              <th>العمليات</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO DELETE LOOP */}
            {temp.map((item) => (
              <EngineerConsultantTableRow status={item} />
            ))}
          </tbody>
        </table>
      </MainPadding>
    </main>
  );
};

export default EngineerConsultantsPage;
