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

let cleanUp = (data) => {
    let rows = data.split('\n');
    console.log(rows);
  let contacts = [];
  for(let i = 1; i < rows.length; i++){
    let contactData = rows[i].split(',');
    let contact = {
      firstName: (contactData[0] == null || contactData[0] == "") ? "Unknown" : contactData[0],
      lastName: (contactData[1] == null || contactData[1] == "") ? "Unknown" : contactData[1],
      email: (contactData[2] == null || contactData[2] == "") ? "no-email@example.com" : contactData[2],
      company: (contactData[3] == null || contactData[3] == "") ? "N/A" : contactData[3],
      title: (contactData[4] == null || contactData[4] == "") ? "Unknown" : contactData[4],
    }
  contacts.push(contact);
  }
  console.log(contacts);
}

cleanUp(csvData);
