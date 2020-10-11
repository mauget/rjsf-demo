export default function extractPersonData(data) {
    return data.map((v) => (
        {
            key: v.id,
            id: v.id,
            lastName: v.lastName,
            firstName: v.firstName,
            email: v.email,
        }
    ))
        .sort((a, b) => (a.firstName > b.firstName))
        .sort((a, b) => (a.lastName > b.lastName));
}
