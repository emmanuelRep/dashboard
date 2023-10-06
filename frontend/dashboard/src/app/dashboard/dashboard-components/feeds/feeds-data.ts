export interface Feed {
    class: string,
    icon: string,
    title: string,
    message: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-danger',
        icon: 'bi bi-bell',
        title: 'DSO Increase',
        message: 'Novarews Group raised by +2.75%.',
        time: 'Just Now'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-hdd',
        title: 'Report Available',
        message: 'Your AR Insights report for October is ready',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'bi bi-bag-check',
        title: 'Invoice due soon',
        message: 'Walgreens Invoice # 324681 is due in 5 days.',
        time: '31 May'
    },
    {
        class: 'bg-primary',
        icon: 'bi bi-person',
        title: 'New Customer',
        message: 'MannaPro, LLC was added to your portfolio',
        time: '30 May'
    }
]
