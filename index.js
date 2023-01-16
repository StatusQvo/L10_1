const users = [
    {
        username: "David",
        status: "online",
        lastActivity: 10
    },
    {
        username: "Lucy",
        status: "offline",
        lastActivity: 22
    },
    {
        username: "Bob",
        status: "online",
        lastActivity: 104
    }
];

const findOnlineAndFilter = function() {
    const usersOnline = users.filter(objVal => objVal.status === "online")
    const usersOnlineNames = usersOnline.map(obj => obj.username)
        .join(', ')

    alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}.`)
}

findOnlineAndFilter()

