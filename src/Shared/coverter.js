export const formatter = {
    addTimeToDate: (date, time) => {
        if ((!time) || (!date)) {
            return;
        }

        const [hr, min, sec] = time.split(':');
        const newDate = new Date(date);
        newDate.setHours(hr);
        newDate.setMinutes(min);
        newDate.setSeconds(sec);

        return newDate;
    }
};