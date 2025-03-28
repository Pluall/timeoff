'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/atoms/Dialog';
import { useSession } from 'next-auth/react';
import { VacationCalendarProps, VacationDataProps } from './types';

export const VacationCalendar: React.FC<VacationCalendarProps> = ({
  vacationDays,
  setVacationDays,
  vacationSaveHandler,
}) => {
  const { data: session } = useSession();
  const role = session?.user?.role || 'user';
  const userName = session?.user.name as string;
  const isAdmin = role === 'admin';

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newDates, setNewDates] = useState(false);

  const handleDateClick = (selectInfo: { dateStr: string }) => {
    if (isAdmin) return;

    setSelectedDate(selectInfo.dateStr);
    setModalOpen(true);
  };

  const confirmSelection = () => {
    if (!selectedDate) return;

    setVacationDays((prev: VacationDataProps[]) =>
      prev.some((d) => d.date === selectedDate)
        ? prev.filter((d) => d.date !== selectedDate)
        : [...prev, { title: userName, date: selectedDate }]
    );
    setNewDates(true);
    setModalOpen(false);
  };

  const handleSave = () => {
    setNewDates(false);
    const vacationDates = vacationDays.map((vacation) => {
      return vacation.date;
    });
    if (vacationSaveHandler) vacationSaveHandler(vacationDates);
  };

  return (
    <div className='p-4 max-w-lg mx-auto bg-background shadow-md rounded-md'>
      {role === 'user' ? (
        <h2 className='text-xl font-bold mb-4'>Select your vacation days</h2>
      ) : undefined}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        selectable={true}
        dateClick={handleDateClick}
        events={vacationDays}
        height='auto'
        eventBackgroundColor='#3b82f6'
        eventTextColor='#fff'
      />
      {!isAdmin ? (
        <Button
          className='mt-4 w-full'
          onClick={handleSave}
          disabled={!newDates}
        >
          Save Vacations
        </Button>
      ) : undefined}

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogTitle>Confirm Selection</DialogTitle>
          <DialogDescription>
            Are you sure you want to mark <strong>{selectedDate}</strong> as a
            vacation day?
          </DialogDescription>
          <DialogFooter className='flex justify-end space-x-2'>
            <Button variant='outline' onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmSelection}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
