
export const getEventValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    return target.value
}