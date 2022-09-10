
export async function getAllEvents() {

    try{
        const response = await fetch('/api/events');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createEvent(data) {
    const response = await fetch(`/api/event`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({event: data})
      })
    return await response.json();
}