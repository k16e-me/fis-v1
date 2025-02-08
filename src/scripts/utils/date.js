export function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date)
    }
    if (isNaN(date.getTime())) {
        console.error('Invalid date input')
        return 'Invalid date'
    }
    return date.toISOString().split('T')[0]
}