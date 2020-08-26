/* eslint-disable operator-linebreak */

export const isToday = (req, res, next) => {
    const { createdDate } = req.params;

    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const date = today.getDate().toString().padStart(2, '0');

    res.locals.isToday =
        year === createdDate.slice(0, 4) &&
        month === createdDate.slice(4, 6) &&
        date === createdDate.slice(6, 8);
    res.locals.createdDate = createdDate;
    next();
};

export const nothing = null;
