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
    // console.log(`Original rows: ${rows}`);

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
    // console.log(`Invalid Contacts: ${invalidContacts}`);
    // console.log(`Valid Contacts: ${validContacts}`);
    
    return {invalidContacts, validContacts};
} 


let cleanContacts = (validContacts) => { 
    
    let contacts = [];
    let unknownTitlesCount = 0;
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
            unknownTitlesCount++;
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
//   console.log(`Contacts: ${contacts}`);
  filterContactsByTitle(contacts);
  return {contacts, unknownTitlesCount};
}

let filterContactsByTitle = (contacts) => {
  let filteredContacts = [];
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    if (contact.title === "Manager" || contact.title === "VP" || contact.title === "CEO") {
      filteredContacts.push(contact);
    }
  }
//   console.log(`Filtered Contacts (Manager, VP, or CEO): ${filteredContacts}`);
  //groupAndSummariseContacts(filteredContacts);
  return filteredContacts;
};

let groupAndSummariseContacts = (contacts) =>{
    let groupedContacts = {};
    let companySummary = {};

    for(let contact of contacts){
        let company = contact.company || `N/A`;
        //group contacts by company
        if(!groupedContacts[company]){
            groupedContacts[company] = [];
        }
        groupedContacts[company].push(contact);

        if(!companySummary[company]){
            companySummary[company] = 0;
        }
        companySummary[company]++;

    }
    // console.log(`Contacts Grouped by Company: ${groupedContacts}`);
    //     for (let company in groupedContacts) {
    //         console.log(`  ${company}:`);
    //         groupedContacts[company].forEach(contact => {
    //             console.log(`    - ${contact.firstName} ${contact.lastName}`); 
    //         });
    //     }
    // console.log(`Summary of Contacts per Company:`);
    //     for (let company in companySummary) {
    //         console.log(`  ${company}: ${companySummary[company]}`); // Iterate and print
    //     }
    return { groupedContacts, companySummary };
}

let simulateImport = (data) => {
    
    
    let timestamp = new Date().toISOString();
    console.log(` 📦 CRM Import Summary ----
        📅 Import Timestamp Start: ${timestamp}`);
    setTimeout(() => {
      console.log("...importing contacts");
        }, "2000");
    
    let {invalidContacts, validContacts} = findValidContacts(data);
    
    if (!validContacts || validContacts.length === 0) {
        console.log(`
        ❌ Import Failed.
        Reason: No valid contacts found.
        Please review the data before trying again.`
        );
    return;
    }

    console.log(`✅ Imported contacts: ${validContacts.length}`);
    console.log(`❌ Skipped contacts: (invalid data) ${invalidContacts.length}`);
    
    setTimeout(() => {
      console.log("...validating titles");
        }, "2000");
    let { contacts, unknownTitlesCount} = cleanContacts(validContacts);
    
    console.log(`🏷️ Contacts with unknown title: ${unknownTitlesCount}`);

    setTimeout(() => {
          console.log("...counting key titles");
        }, "2000");
    let keyContacts = filterContactsByTitle(contacts);
        
    console.log(`🧠Key roles Imported (CEO, VP, Manager): ${keyContacts.length}`);

    timestamp = new Date().toISOString();
    console.log(`📅 Import Timestamp End: ${timestamp}`);
    
}

simulateImport(csvData);
