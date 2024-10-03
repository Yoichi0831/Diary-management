// 'use client';

import { Card, AreaChart } from '@tremor/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}



const data = [
    {
        name: 'S&P Futures',
        stat: '5,669.50',
        change: '+0.87%',
        changeType: 'positive',
    },
    {
        name: 'Weekly sessions',
        stat: '1,342',
        change: '-9.8%',
        changeType: 'negative',
    },
    {
        name: 'Duration',
        stat: '5.2min',
        change: '+7.7%',
        changeType: 'positive',
    },
];




export const KPIcards = () => {
    return (
        <>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                    <Card key={item.name} className="">
                        <div className="flex items-center justify-between">
                            <dt className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                                {item.name}
                            </dt>
                            <span
                                className={classNames(
                                    item.changeType === 'positive'
                                        ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                                        : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                                    'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset',
                                )}
                            >
                                {item.change}
                            </span>
                        </div>
                        <dd className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            {item.stat}
                        </dd>
                    </Card>
                ))}
            </dl>
        </>
    );
}

export const KPIcard = (data, title, color, font, fontSize,) => {
    data = data.data
    const areaChartData = data.areaChartData
    return (
        <>
            <Card key={data.name} className="w-[150px] h-[150px] pt-[0px] pl-[0px]">
                    <div className="items-center justify-between">
                        <div className="flex items-center justify-between ">
                            <dt className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                                {data.name}
                            </dt>

                            <dd className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                {data.stat}
                            </dd>
                        </div>
                    </div>



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
                    <AreaChart
                        data={areaChartData}
                        index="date"
                        categories={['CPI', 'CashRate']}
                        colors={['blue', 'violet']}
                        showLegend={false}
                        showYAxis={true}
                        showGridLines={true}
                        showGradient={false}
                        startEndOnly={false}
                        className="mt-6 h-48 w-full h-full mt-[0px]"
                    />
                

            </Card>
        </>
    );
}