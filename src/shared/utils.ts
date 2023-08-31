/* eslint-disable @typescript-eslint/no-explicit-any */
export const asyncForEach = async (array: any[], callback: any) => {
  if (!Array.isArray(array)) {
    throw new Error('Expected an array');
  }
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export const hasTimeConflict = (
  existingSlot: {
    startTime: string;
    endTime: string;
    room: string;
  }[],
  newSlot: {
    startTime: string;
    endTime: string;
    room: string;
  }
) => {
  for (const slot of existingSlot) {
    const existingStart = new Date(`1980-03-12T${slot.startTime}:00`);
    const existingEnd = new Date(`1980-03-12T${slot.endTime}:00`);
    const newStart = new Date(`1980-03-12T${newSlot.startTime}:00`);
    const newEnd = new Date(`1980-03-12T${newSlot.endTime}:00`);

    if (existingEnd > newStart && existingStart < newEnd) {
      return true;
    }
  }
  return false;
};
