import { statusOrder } from 'src/content.config'

export function _sortTasksByStatus(tasks) {
    return tasks.sort((a, b) => {
        const statusA = statusOrder.indexOf(a.data.status)
        const statusB = statusOrder.indexOf(b.data.status)

        if (statusA !== statusB) return statusA - statusB

        const numberA = parseInt(a.id.split('/').pop().split('-')[0])
        const numberB = parseInt(b.id.split('/').pop().split('-')[0])
        return numberA - numberB
    })
}