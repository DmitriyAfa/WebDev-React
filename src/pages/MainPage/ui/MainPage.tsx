import { ButtonTheme } from "shared/ui/Button";
import { ButtonSize } from "shared/ui/Button";
import { Button } from "shared/ui/Button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const MainPage = () => {
  return (
    <div>
      MainPage
      <ThemeSwitcher />
      <Button> Кнопка </Button>
      <Button theme={ButtonTheme.BACKGROUND}> ButtonTheme.BACKGROUND </Button>
      <Button theme={ButtonTheme.CLEAR}> ButtonTheme.CLEAR </Button>
      <Button theme={ButtonTheme.OUTLINE}> ButtonTheme.OUTLINE </Button>
      <Button size={ButtonSize.L}> ButtonSize.L </Button>
      <Button size={ButtonSize.M}> ButtonSize.M </Button>
      <Button size={ButtonSize.XL}> ButtonSize.XL </Button>
    </div>
  );
};

export default MainPage;