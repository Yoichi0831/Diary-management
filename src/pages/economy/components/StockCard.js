import { KPIcard } from './KPIcard';
import { Card, AreaChart } from '@tremor/react';
import { Example } from './areaChart'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const data = [
    {
        date: 'Sep 22',
        CPI: 7.3,
        CashRate: 2.35,
    },
    {
        date: 'Dec 22',
        CPI: 7.8,
        CashRate: 3.1,
    },
    {
        date: 'Mar 23',
        CPI: 7.0,
        CashRate: 3.6,
    },
    {
        date: 'Jun 23',
        CPI: 6.0,
        CashRate: 4.1,
    },
    {
        date: 'Sep 23',
        CPI: 5.4,
        CashRate: 4.1,
    },
    {
        date: 'Dec 23',
        CPI: 4.1,
        CashRate: 4.35,
    },
    {
        date: 'Mar 24',
        CPI: 3.6,
        CashRate: 4.35,
    },
    {
        date: 'Jun 24',
        CPI: 3.8,
        CashRate: 4.35,
    },
];


export const StockCard = (height = '2000px', width = '200px') => {
    return (
        <>
            <Card key={data.name} style={{ height, width }}>
                <div className="flex items-center justify-between">
                    <dt className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                        {data.name}
                    </dt>
                    <span
                        className={classNames(
                            data.changeType === 'positive'
                                ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                                : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                            'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset',
                        )}
                    >
                        {data.change}
                    </span>
                    <div className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">Change from same period last year</div>
                </div>
                <dd className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {data.stat}
                </dd>
                <AreaChart
                    data={data}
                    index="date"
                    categories={['CPI', 'CashRate']}
                    colors={['blue', 'violet']}
                    showLegend={false}
                    showYAxis={true}
                    showGridLines={true}
                    showGradient={false}
                    startEndOnly={false}
                    className="mt-6 h-48"
                />
            </Card>
        </>
    );
}