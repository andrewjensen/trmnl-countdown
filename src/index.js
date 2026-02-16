const express = require('express');
const dayjs = require('dayjs');
const app = express();
const PORT = process.env.PORT || 3000;

const TARGET_DATE = process.env.TARGET_DATE || '2026-10-01';

app.get('/', (req, res) => {
  const targetDate = dayjs(TARGET_DATE);
  const today = dayjs().startOf('day');
  const target = targetDate.startOf('day');
  
  const monthsRemaining = target.diff(today, 'month');
  const dateAfterMonths = today.add(monthsRemaining, 'month');
  const daysRemaining = target.diff(dateAfterMonths, 'day');
  
  res.json({ 
    targetDate: targetDate.format('YYYY-MM-DD'),
    targetDateHumanReadable: targetDate.format('MMMM D'),
    monthsRemaining: monthsRemaining,
    daysRemaining: daysRemaining
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
