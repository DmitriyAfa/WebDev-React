import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './[FTName].module.scss';

interface + [FTName]Props {
  className ?: string;
}

export const [FTName] = memo((props: [FTName]Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.[FTName], [className], {})}>
      {FTName}
    </div>
  );
});