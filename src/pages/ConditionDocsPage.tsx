import {
  ButtonGold,
  ConditionCard,
  Link,
  MainPadding,
  plusCircleOutlineWhiteIcon,
  RoundButton,
} from "..";

const ConditionDocsPage = () => {
  return (
    <main>
      <MainPadding>
        <section className="flex items-center max-lg:flex-col max-lg:w-full">
          <h1 className="text-nowrap text-2xl font-bold pb-4">كراسات الشروط</h1>
          <div className="grid w-full">
            <div className="felx justify-self-center max-lg:mb-4">
              <div className="max-lg:py-2">
                <RoundButton active>الكل</RoundButton>
              </div>
              <div className="max-lg:py-2">
                <RoundButton>معلًقة</RoundButton>
              </div>
              <div className="max-lg:py-2">
                <RoundButton>مقبولة</RoundButton>
              </div>
              <div className="max-lg:py-2">
                <RoundButton>مرفوضة</RoundButton>
              </div>
            </div>
          </div>
          <Link to={"new"}>
            <ButtonGold>
              <div className="text-nowrap flex gap-2 w-max p-2">
                <img src={plusCircleOutlineWhiteIcon} alt="" />
                <span>أضف كراسة</span>
              </div>
            </ButtonGold>
            {/* <AccentText>
              <div className="text-nowrap flex gap-2">
                <span className="underline">أضف كراسة جديدة</span>
                <img src={goldLinkIcon} alt="" />
              </div>
            </AccentText> */}
          </Link>
        </section>
        <section className="flex flex-wrap gap-8 my-16 max-lg:justify-center">
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
          <ConditionCard status="مقبولة" />
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
          <ConditionCard status="مقبولة" />
          <ConditionCard status="مرفوضة" />
          <ConditionCard status="معلًقة" />
        </section>
      </MainPadding>
    </main>
  );
};

export default ConditionDocsPage;
