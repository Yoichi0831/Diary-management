// 'use client';

import { useEffect, useState } from 'react';
import { RiCloseLine } from '@remixicon/react';
import { AreaChart, Card, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const data = [
  {
    date: 'Sep 22',
    CPI: 7.3,
    Sponsored: 0,
  },
  {
    date: 'Dec 22',
    CPI: 7.8,
    Sponsored: 0,
  },
  {
    date: 'Mar 23',
    CPI: 7.0,
    Sponsored: 0,
  },
  {
    date: 'Jun 23',
    CPI: 6.0,
    Sponsored: 0,
  },
  {
    date: 'Sep 23',
    CPI: 5.4,
    Sponsored: 0,
  },
  {
    date: 'Dec 23',
    CPI: 4.1,
    Sponsored: 0,
  },
  {
    date: 'Mar 24',
    CPI: 3.6,
    Sponsored: 0,
  },
  {
    date: 'Jun 24',
    CPI: 3.8,
    Sponsored: 0,
  },
];

const summary = [
  {
    name: 'CPI',
    value: 3273,
  },
  {
    name: 'Sponsored',
    value: 120,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const statusColor = {
  CPI: 'bg-blue-500',
  Sponsored: 'bg-violet-500',
};

export const Example = () => {
  const [isOpen, setIsOpen] = useState(true);

  // just for demo purpose
  useEffect(() => {
    let timeoutId;

    if (!isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen]);
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Follower metrics
        </h3>
        <AreaChart
          data={data}
          index="date"
          categories={['CPI', 'Sponsored']}
          colors={['blue', 'violet']}
          showLegend={false}
          showYAxis={true}
          showGridLines={true}
          showGradient={false}
          startEndOnly={false}
          className="mt-6 h-48"
        />
        <List className="mt-2">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}