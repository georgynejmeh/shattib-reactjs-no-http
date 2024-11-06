import { purpleParagraphIcon, redTrashIcon } from "..";

interface Props {
  status?: "معلّق" | "معالج";
}

const EngineerConsultantTableRow = ({ status }: Props) => {
  return (
    <tr>
      <td>#12345647</td>
      <td>15/8/2024</td>
      <td>استشارة توسيع مساحة</td>
      <td>
        {status === "معالج" ? (
          <div className="rounded-full bg-green-200 w-24 py-1 mx-auto text-center">
            {status}
          </div>
        ) : status === "معلّق" ? (
          <div className="rounded-full bg-orange-200 w-24 py-1 mx-auto text-center">
            {status}
          </div>
        ) : null}
      </td>
      <td>
        <div className="flex justify-center gap-8">
          <button>
            <img src={purpleParagraphIcon} alt="" />
          </button>
          <button>
            <img src={redTrashIcon} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EngineerConsultantTableRow;
