import { ButtonTheme } from "shared/ui/Button";
import { ButtonSize } from "shared/ui/Button";
import { Button } from "shared/ui/Button";
import { Text, TextSize, TextTheme } from "shared/ui/Text";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { MainPageIntro } from "../MainPageIntro/MainPageIntro";

const MainPage = () => {
  return (
    <div>
      MainPage
      <ThemeSwitcher />
      <MainPageIntro />
    </div>
  );
};

export default MainPage;