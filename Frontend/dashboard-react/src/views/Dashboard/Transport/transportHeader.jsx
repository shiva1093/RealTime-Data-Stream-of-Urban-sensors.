import React from 'react';
export const busHeader = [
    { id: 'transportType', numeric: false, disablePadding: true, label: 'Transport Type' },
    { id: 'transportLine', numeric: true, disablePadding: false, label: 'Bus Name' },
    { id: 'direction', numeric: true, disablePadding: false, label: 'Direction' },
    { id: 'transportAmountLowerBound', numeric: true, disablePadding: false, label: 'LowerBound' },
    { id: 'transportAmountUpperBound', numeric: true, disablePadding: false, label: 'UpperBound' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
];
