export const getParsedOrderTime = (t: string) => {
  const dateOfOrder = new Date(t);
  const time = `${
    String(dateOfOrder.getHours()).length === 1
      ? "0" + dateOfOrder.getHours()
      : dateOfOrder.getHours()
  }:${
    String(dateOfOrder.getMinutes()).length === 1
      ? "0" + dateOfOrder.getMinutes()
      : dateOfOrder.getMinutes()
  }`;

  const day = () => {
    const now = new Date();
    const currentDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const orderDate = new Date(
      dateOfOrder.getFullYear(),
      dateOfOrder.getMonth(),
      dateOfOrder.getDate()
    );

    const dayTitle = (number: number) => {
      if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return "дней";
      const lastNum = number % 10;
      if (lastNum == 1) {
        return "день";
      }
      if ([2, 3, 4].includes(lastNum)) {
        return "дня";
      }
      if ([5, 6, 7, 8, 9, 0].includes(lastNum)) {
        return "дней";
      }
    };

    const msDay = 86400000;

    if (currentDate.getTime() - orderDate.getTime() === 0) {
      return "Сегодня";
    } else if ((currentDate.getTime() - orderDate.getTime()) / msDay === 1) {
      return "Вчера";
    } else {
      const totalDays = Math.abs(
        Math.floor((orderDate.getTime() - currentDate.getTime()) / msDay)
      );
      return `${totalDays} ${dayTitle(totalDays)} назад`;
    }
  };
  return { time, day };
};
