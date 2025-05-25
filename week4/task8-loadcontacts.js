const contacts = ["Alex", "Igor", "Maria"];

function loadContacts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(contacts);
        }, 2000);
    });
}

loadContacts()
    .then((loadedConacts) => {
        console.log(`Contacts loaded: ${loadedConacts.join(', ')}`);
    })
    .catch((error) => {
        console.log(`Failed to load contacts.`);
    });