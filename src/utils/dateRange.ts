const getUTC8Timestamp = (date: Date) => {
  return date.getTime() - 8 * 60 * 60 * 1000; // Convert to UTC+8
};

// Function to generate start and end timestamps in UTC+8
export const getDateRange = (option: string) => {
  const now = new Date();
  const start = new Date();
  const end = new Date();

  switch (option) {
    case 'Өнөөдөр':
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Өчигдөр':
      start.setUTCDate(now.getUTCDate() - 1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCDate(now.getUTCDate() - 1);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Энэ долоо хоног':
      start.setUTCDate(now.getUTCDate() - now.getUTCDay());
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCDate(start.getUTCDate() + 6);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Өнгөрсөн долоо хоног':
      start.setUTCDate(now.getUTCDate() - now.getUTCDay() - 7);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCDate(start.getUTCDate() + 6);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Энэ сар':
      start.setUTCDate(1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCMonth(now.getUTCMonth() + 1, 0);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Өнгөрсөн сар':
      start.setUTCMonth(now.getUTCMonth() - 1, 1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCMonth(now.getUTCMonth(), 0);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Сүүлийн гурван сар':
      start.setUTCMonth(now.getUTCMonth() - 3, 1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Сүүлийн 6 сар':
      start.setUTCMonth(now.getUTCMonth() - 6, 1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Энэ жил':
      start.setUTCMonth(0, 1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCMonth(11, 31);
      end.setUTCHours(23, 59, 59, 999);
      break;
    case 'Өнгөрсөн жил':
      start.setUTCFullYear(now.getUTCFullYear() - 1, 0, 1);
      start.setUTCHours(0, 0, 0, 0);
      end.setUTCFullYear(now.getUTCFullYear() - 1, 11, 31);
      end.setUTCHours(23, 59, 59, 999);
      break;
  }

  return {
    startDate: getUTC8Timestamp(start),
    endDate: getUTC8Timestamp(end),
  };
};
