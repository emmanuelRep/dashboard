export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-coin',
        subtitle: 'AR Balance',
        title: '$17,389,313'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-wallet',
        subtitle: 'Average DSO last 12 months',
        title: '34'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-person',
        subtitle: 'Customers with Invoices last 12 months',
        title: '1071'
    },
    {
        bgcolor: 'primary',
        icon: 'bi bi-bank',
        subtitle: 'Collections last month',
        title: '$5,452,941'
    }
]
