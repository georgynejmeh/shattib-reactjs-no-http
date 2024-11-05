import { DropDownMenuButton, MainPadding, OrdersTableRow } from "..";

const OrdersPage = () => {
  // TODO DELETE
  const temp: Array<"قيد المعالجة" | "مقبول" | "مرفوض" | "مكتمل"> = [
    "قيد المعالجة",
    "مقبول",
    "مرفوض",
    "مكتمل",
    "قيد المعالجة",
    "مقبول",
    "مرفوض",
    "مكتمل",
  ];
  return (
    <main>
      <MainPadding>
        <h1 className="text-2xl font-bold max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center">
          الطلبات
        </h1>
        <div className="flex flex-col items-end w-full">
          <div className="w-32 py-4">
            <DropDownMenuButton>جميع الطلبات</DropDownMenuButton>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="orders-table">
            <thead>
              <tr>
                <th>رقم الطلب</th>
                <th>تاريخ الإنشاء</th>
                <th className="max-lg:hidden">المنتجات</th>
                <th className="max-lg:hidden">الكمية</th>
                <th>التكلفة الكلية</th>
                <th>حالة الطلب</th>
                <th className="max-lg:hidden">تاريخ التنفيذ</th>
                <th>العمليات</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO DELETE LOOP */}
              {temp.map((item) => (
                <OrdersTableRow status={item} />
              ))}
            </tbody>
          </table>
        </div>
      </MainPadding>
    </main>
  );
};

export default OrdersPage;
