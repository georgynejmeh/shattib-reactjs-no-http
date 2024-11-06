import {
  shattibLogoRow,
  searchIcon,
  cartIcon,
  heartIcon,
  accountIcon,
  TextInput,
  Link,
  NavBarCategoriesDropdownMenu,
  menuIcon,
  useState,
} from "..";

const NavBar = () => {
  const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(true);
  // const { setIsShownEngineerRequestModal } = useEngineerRequest();
  return (
    <nav className="flex items-center justify-between border-b py-4 px-8 max-lg:flex-col max-lg:items-start max-lg:p-8 max-lg:gap-8">
      <div className="flex justify-between w-full">
        <img src={shattibLogoRow} alt="" />
        <button
          onClick={() => setIsNavBarCollapsed(!isNavBarCollapsed)}
          className="lg:hidden"
        >
          <img src={menuIcon} alt="" />
        </button>
      </div>
      <Link className={isNavBarCollapsed ? "hidden" : ""} to={"/home"}>
        <span>الصفحة الرئيسية</span>
      </Link>
      <div className={isNavBarCollapsed ? "hidden" : ""}>
        <NavBarCategoriesDropdownMenu />
      </div>
      {/* <Link to={"/home"}>
        <span>جميع المنتجات</span>
      </Link> */}
      <Link className={isNavBarCollapsed ? "hidden" : ""} to={"/conditions"}>
        <span>كراسات الشروط</span>
      </Link>
      <div
        className={`w-96 max-lg:w-full max-lg:max-w-72 ${
          isNavBarCollapsed ? "hidden" : ""
        }`}
      >
        <TextInput icon={searchIcon} placeholder="البحث عن المنتجات" />
      </div>
      <div
        className={`lg:hidden flex items-center justify-between w-full ${
          isNavBarCollapsed ? "hidden" : ""
        }`}
      >
        <Link to={"/cart"}>
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
              4
            </div>
            <img src={cartIcon} alt="" />
            <span>السلة</span>
          </div>
        </Link>
        <Link to={"/wishlist"}>
          <div className="flex flex-col items-center">
            <img src={heartIcon} alt="" />
            <span>المفضلة</span>
          </div>
        </Link>
        {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
        <Link to={"/orders"}>
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
            <img src={accountIcon} alt="" />
          </div>
        </Link>
        <span>EN</span>
      </div>

      <Link className="max-lg:hidden" to={"/cart"}>
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-2 -right-3 px-2 bg-primary text-white rounded-full">
            4
          </div>
          <img src={cartIcon} alt="" />
          <span>السلة</span>
        </div>
      </Link>
      <Link className="max-lg:hidden" to={"/wishlist"}>
        <div className="flex flex-col items-center">
          <img src={heartIcon} alt="" />
          <span>المفضلة</span>
        </div>
      </Link>
      {/* <div
        onClick={() => {
          setIsShownEngineerRequestModal(true);
        }}
      >
        <ButtonGold>طلب عرض سعر</ButtonGold>
      </div> */}
      <Link className="max-lg:hidden" to={"/orders"}>
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
          <img src={accountIcon} alt="" />
        </div>
      </Link>
      <span className="max-lg:hidden">EN</span>
    </nav>
  );
};

export default NavBar;
