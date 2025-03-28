import { SetStateAction } from 'react';

export interface VacationCalendarProps {
  vacationDays: VacationDataProps[];
  setVacationDays: (value: SetStateAction<VacationDataProps[]>) => void;
  vacationSaveHandler?: (vacationDates: string[]) => void;
}

export type VacationDataProps = {
  title: string;
  date: string;
};
