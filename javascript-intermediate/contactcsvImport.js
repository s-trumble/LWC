const csvData = `
First Name,Last Name,Email,Company,Title
Anna,Smith,anna@example.com,Acme Inc.,Manager
Brian,,brian@email.com,,Developer
Claire,Brown,,Acme Inc.,Intern
John,Doe,john.doe@example.com,Salesforce,Admin
Ella,Fitzgerald,ella@jazzmail.com,Jazz Corp,VP
Tom,,tom123@invalid,N/A,Consultant
Maria,Garcia,maria.garcia@company.com,Acme Inc.,Sales
Derek,Lee,,Salesforce,Engineer
Sophie,Khan,sophie.khan@email.com,StartupX,CEO
Kevin,Nguyen,,StartupX,Intern
`.trim();

/*
Task 1 - Clean Up 
Clean up the data. If a contact is missing a first name, last name, email, company, or title, you must replace it with default values:
Missing names or titles → "Unknown"
Missing email → "no-email@example.com"
Missing company → "N/A"

*/

let findValidContacts = (data) => {
    let rows = data.split('\n');
    console.log(`Original rows: ${rows}`);

    let invalidContacts  = [];
    let validContacts  = [];
    
    for(let i = 1; i < rows.length; i++){
        let invalid = false;
        let contactData = rows[i].split(',');
        //check missing first name
        if(contactData[0] == null || contactData[0] == "" ){
            invalid = true;
        }
        //check invalid email. use -1 to ensuer a domain exists e.g. email not test@.com
        if( !contactData[2]?.includes('@') || contactData[2]?.indexOf('@') >= contactData[2]?.lastIndexOf('.') - 1){
            invalid = true;
        }

        let contact = {
            firstName: contactData[0],
            lastName: contactData[1],
            email: contactData[2],
            company: contactData[3],
            title: contactData[4],
            invalid: invalid
        }
        if(invalid){
          invalidContacts.push(contact);  
        } else {
            validContacts.push(contact);
        }
    }
    console.log(`Invalid Contacts: ${invalidContacts}`);
    console.log(`Valid Contacts: ${validContacts}`);
    cleanContacts(validContacts);     
} 


let cleanContacts = (validContacts) => { 
    
    let contacts = [];
    let specialTitle = [];
    for(let i = 0; i < validContacts.length; i++){
        let contactData = validContacts[i];
        let normalizedTitle = contactData.title;
        // Normalize the title
        if (normalizedTitle) { // Only normalize if title exists
            normalizedTitle = normalizedTitle.toLowerCase(); // Convert to lowercase for easier comparison
            if (normalizedTitle === "ceo" || normalizedTitle === "chief executive officer") {
                normalizedTitle = "CEO";
            } else if (normalizedTitle === "vp") {
                normalizedTitle = "VP";
            } else {
                normalizedTitle = normalizedTitle[0].toUpperCase() + normalizedTitle.substring(1).toLowerCase;
            }
        } else {
            normalizedTitle = "Unknown";
        }
        
        let contact = {
        firstName: (contactData.firstName == null || contactData.firstName == "") ? "Unknown" : contactData.firstName,
        lastName: (contactData.lastName == null || contactData.lastName == "") ? "Unknown" : contactData.lastName,
        email: (contactData.email == null || contactData.email == "") ? "no-email@example.com" : contactData.email,
        company: (contactData.company == null || contactData.company == "") ? "N/A" : contactData.company,
        title: normalizedTitle
        }
  contacts.push(contact);
  }
  console.log(`Contacts: ${contacts}`);
  filterContactsByTitle(contacts);
}

let filterContactsByTitle = (contacts) => {
  let filteredContacts = [];
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    if (contact.title === "Manager" || contact.title === "VP" || contact.title === "CEO") {
      filteredContacts.push(contact);
    }
  }
  console.log(`Filtered Contacts (Manager, VP, or CEO): ${filteredContacts}`);
  return filteredContacts; // Return the filtered array
};


findValidContacts(csvData);
